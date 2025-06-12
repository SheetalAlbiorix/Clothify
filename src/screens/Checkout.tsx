import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { checkoutstyle } from "../styles/CheckoutStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { Spacing } from "../components/layout";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";
import CheckoutRenderItem from "../components/CheckoutRenderItem";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type CheckoutNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Checkout"
>;

const orderList = Data.orderList.map((item) => ({
  ...item,
  image: images[item.image as keyof typeof images],
  title: strings[item.title as keyof typeof strings] || item.title,
  size: strings[item.size as keyof typeof strings] || item.size,
  price: strings[item.price as keyof typeof strings] || item.price,
}));

const Checkout = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<CheckoutNavigationProp>();
  const route = useRoute<
    RouteProp<{
      params: {
        selectedAddress?: { label: string; address: string };
        selectedArrival?: { label: string; arrival: string };
      };
    }>
  >();

  const { selectedAddress, selectedArrival } = route.params || {};
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return (
      <View
        style={[
          checkoutstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="checkout" />
        <NoDataFound message={strings.noCheckoutFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        checkoutstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="checkout" />

      <View style={checkoutstyle.homeeconomycontainer}>
        <Text
          style={[checkoutstyle.shippingheader, { color: colors.colors.text }]}
        >
          {strings.shippingaddress}
        </Text>
        <View style={checkoutstyle.homecontainer}>
          <Image
            source={images.locationpin}
            style={[
              checkoutstyle.locationpinImage,
              { tintColor: colors.colors.tintColor },
            ]}
          />
          <View>
            <Text
              style={[checkoutstyle.hometext, { color: colors.colors.text }]}
            >
              {selectedAddress ? selectedAddress.label : strings.Home}
            </Text>
            <Text style={checkoutstyle.address}>
              {selectedAddress ? selectedAddress.address : strings.address1}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              checkoutstyle.changeButton,
              { borderColor: colors.colors.borderColor },
            ]}
            onPress={() => navigation.navigate("ShippingAddress")}
          >
            <Text style={checkoutstyle.changetext}>{strings.Change}</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={[
            checkoutstyle.shippingtypeheader,
            { color: colors.colors.text },
          ]}
        >
          {strings.chooseshippingtype}
        </Text>
        <View style={checkoutstyle.economycontainer}>
          <Image
            source={images.boxtime}
            style={[
              checkoutstyle.boxtime,
              { tintColor: colors.colors.tintColor },
            ]}
          />
          <View>
            <Text
              style={[checkoutstyle.economytext, { color: colors.colors.text }]}
            >
              {selectedArrival ? selectedArrival.label : strings.economy}
            </Text>
            <Text style={checkoutstyle.estimatedArrival}>
              {selectedArrival
                ? selectedArrival.arrival
                : strings.estimatedarrivaltext}
            </Text>
          </View>
          <TouchableOpacity
            style={[
              checkoutstyle.changeButton,
              { borderColor: colors.colors.borderColor },
            ]}
            onPress={() => navigation.navigate("ChooseShipping")}
          >
            <Text style={checkoutstyle.changetext}>{strings.Change}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={[checkoutstyle.orderlistheader, { color: colors.colors.text }]}
      >
        {strings.orderlist}
      </Text>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ ...Spacing.paddingHorizontal_20 }}
        renderItem={({ item }) => <CheckoutRenderItem item={item} />}
      />

      <View
        style={[
          checkoutstyle.footer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity
          style={checkoutstyle.paymentButton}
          onPress={() =>
            navigation.navigate({
              name: "PaymentMethod",
              params: {
                selectedAddress,
                selectedArrival,
              },
            })
          }
        >
          <Text style={checkoutstyle.paymentText}>
            {strings.continuepayment}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;
