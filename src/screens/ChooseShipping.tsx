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
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import { ArrivalType } from "../types/types";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import ChooseShipRenderItem from "../components/ChooseShipRenderItem";

type ChooseShippingNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ChooseShipping"
>;

const arrivals: ArrivalType[] = Data.ChooseShips.map((item: ArrivalType) => ({
  id: item.id,
  label: strings[item.label as keyof typeof strings] || item.label,
  arrival: strings[item.arrival as keyof typeof strings] || item.arrival,
}));

const ChooseShipping = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
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
      <StatusBar style={statusBarStyle} />
      <Header type="chooseshipping" />
      <FlatList
        data={arrivals}
        contentContainerStyle={chooseshippingStyle.chooseaddress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ChooseShipRenderItem
            item={item}
            selectedItem={selectedArrival}
            onSelect={handleSelectArrival}
          />
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
