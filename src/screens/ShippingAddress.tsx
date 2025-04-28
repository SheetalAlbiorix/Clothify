import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { shippingAddressStyle } from "../styles/ShippingAdressStyle";
import { strings } from "../utils/strings";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type ShippingAddressNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ShippingAddress"
>;

export type AddressType = {
  id: string;
  label: string;
  address: string;
};

const addresses: AddressType[] = [
  { id: "1", label: strings.Home, address: strings.address1 },
  { id: "2", label: strings.office, address: strings.address2 },
  { id: "3", label: strings.parentshouse, address: strings.address3 },
  { id: "4", label: strings.friendshouse, address: strings.address4 },
];

const ShippingAddress = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<ShippingAddressNavigationProp>();
  const [selectedAddress, setSelectedAddress] = useState<AddressType | null>(
    null
  );

  const handleSelectAddress = (address: AddressType) => {
    setSelectedAddress(address);
  };

  const handleApply = () => {
    if (selectedAddress) {
      navigation.navigate("Checkout", { selectedAddress });
    }
  };

  const addNewShippingAddress = () => {
    console.log('clicked')
  }
 
  return (
    <View
      style={[
        shippingAddressStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={shippingAddressStyle.headerContainer}>
        <TouchableOpacity
          style={shippingAddressStyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={shippingAddressStyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text
          style={[shippingAddressStyle.header, { color: colors.colors.text }]}
        >
          {strings.shippingaddress}
        </Text>
      </View>

      <FlatList
        data={addresses}
        contentContainerStyle={shippingAddressStyle.locationaddress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={shippingAddressStyle.addressItem}
            onPress={() => handleSelectAddress(item)}
          >
            <View style={shippingAddressStyle.addressInfo}>
              <Image
                source={images.locationpin}
                style={shippingAddressStyle.locationpinImage}
              />
              <View>
                <Text
                  style={[
                    shippingAddressStyle.addressTitle,
                    { color: colors.colors.text },
                  ]}
                >
                  {item.label}
                </Text>
                <Text
                  style={[
                    shippingAddressStyle.addressDetails,
                    { color: colors.colors.textAccent },
                  ]}
                >
                  {item.address}
                </Text>
              </View>
            </View>

            <View style={shippingAddressStyle.radioButtonContainer}>
              {selectedAddress?.id === item.id && (
                <View style={shippingAddressStyle.selectedRadio} />
              )}
            </View>
          </Pressable>
        )}
      />
      <View style={shippingAddressStyle.addnewshipping}>
        <TouchableOpacity style={shippingAddressStyle.addnewshippingbutton} onPress={addNewShippingAddress}>
          <Image
            source={images.plusIcon}
            style={shippingAddressStyle.plusIcon}
          />
          <Text style={shippingAddressStyle.addshippingText}>
            {strings.addnewaddress}
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          shippingAddressStyle.footer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity
          style={[
            shippingAddressStyle.applyButton,
            selectedAddress ? {} : { opacity: 0.5 },
          ]}
          onPress={handleApply}
          disabled={!selectedAddress}
        >
          <Text style={shippingAddressStyle.applyText}>{strings.apply}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShippingAddress;
