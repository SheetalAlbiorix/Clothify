import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { shippingAddressStyle } from "../styles/ShippingAdressStyle";
import { strings } from "../utils/strings";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import { AddressType } from "../types/types";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import ShippingRenderItem from "../components/ShippingRenderItem";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type ShippingAddressNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ShippingAddress"
>;

const addresses: AddressType[] = Data.addresses.map((item: AddressType) => ({
  id: item.id,
  label: strings[item.label as keyof typeof strings] || item.label,
  address: strings[item.address as keyof typeof strings] || item.address,
}));

const ShippingAddress = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<ShippingAddressNavigationProp>();
  const [selectedAddress, setSelectedAddress] = useState<AddressType | null>(
    null
  );
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const handleSelectAddress: (address: AddressType) => void = (
    address: AddressType
  ) => {
    setSelectedAddress(address);
  };

  const handleApply = () => {
    if (selectedAddress) {
      navigation.navigate("Checkout", { selectedAddress });
    }
  };

  const addNewShippingAddress = () => {
    console.log("clicked");
  };

  if (!isConnected) {
    return (
      <View
        style={[
          shippingAddressStyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="shippingaddress" />
        <NoDataFound message={strings.noShippingAddressFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        shippingAddressStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="shippingaddress" />

      <FlatList
        data={addresses}
        contentContainerStyle={shippingAddressStyle.locationaddress}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ShippingRenderItem
            item={item}
            selectedAddress={selectedAddress}
            handleSelectAddress={handleSelectAddress}
          />
        )}
      />
      <View style={shippingAddressStyle.addnewshipping}>
        <TouchableOpacity
          style={shippingAddressStyle.addnewshippingbutton}
          onPress={addNewShippingAddress}
        >
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
