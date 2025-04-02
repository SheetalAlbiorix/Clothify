import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { chooseshippingStyle } from "../styles/ChooseShippingStyle";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { images } from "../utils/images";
import { strings } from "../utils/strings";

type ChooseShippingNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ChooseShipping"
>;

export type ArrivalType = {
  id: string;
  label: string;
  arrival: string;
};

const arrivals: ArrivalType[] = [
  { id: "1", label: strings.Home, arrival: strings.address1 },
  { id: "2", label: strings.office, arrival: strings.address2 },
  { id: "3", label: strings.parentshouse, arrival: strings.address3 },
  { id: "4", label: strings.friendshouse, arrival: strings.address4 },
];

const ChooseShipping = () => {
  const colors = useColors();
  const navigation = useNavigation<ChooseShippingNavigationProp>();
  const [selectedArrival, setSelectedArrival] = useState<ArrivalType | null>(
    null
  );

  const handleSelectArrival = (arrival: ArrivalType) => {
    setSelectedArrival(arrival);
  };

  const handleApply = () => {
    if (selectedArrival) {
      navigation.navigate("Checkout", { selectedArrival });
    }
  };

  return (
    <View
      style={[
        chooseshippingStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={chooseshippingStyle.headerContainer}>
        <TouchableOpacity
          style={chooseshippingStyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={chooseshippingStyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text
          style={[chooseshippingStyle.header, { color: colors.colors.text }]}
        >
          {strings.chooseshipping}
        </Text>
      </View>
      <FlatList
        data={arrivals}
        contentContainerStyle={chooseshippingStyle.chooseaddress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={chooseshippingStyle.chooseaddressItem}
            onPress={() => handleSelectArrival(item)}
          >
            <View style={chooseshippingStyle.chooseaddressInfo}>
              <Image
                source={images.locationpin}
                style={chooseshippingStyle.boxtimeImage}
              />
              <View>
                <Text
                  style={[
                    chooseshippingStyle.chooseaddressTitle,
                    { color: colors.colors.text },
                  ]}
                >
                  {item.label}
                </Text>
                <Text
                  style={[
                    chooseshippingStyle.chooseaddressDetails,
                    { color: colors.colors.textAccent },
                  ]}
                >
                  {item.arrival}
                </Text>
              </View>
            </View>

            <View style={chooseshippingStyle.radioButtonContainer}>
              {selectedArrival?.id === item.id && (
                <View style={chooseshippingStyle.selectedRadio} />
              )}
            </View>
          </Pressable>
        )}
      />
      <View
              style={[
                chooseshippingStyle.footer,
                {
                  backgroundColor: colors.colors.background,
                  borderTopColor: colors.colors.borderColor,
                },
              ]}
            >
              <TouchableOpacity
                style={[
                  chooseshippingStyle.applyButton,
                  selectedArrival ? {} : { opacity: 0.5 },
                ]}
                onPress={handleApply}
                disabled={!selectedArrival}
              >
                <Text style={chooseshippingStyle.applyText}>{strings.apply}</Text>
              </TouchableOpacity>
            </View>
    </View>
  );
};

export default ChooseShipping;
