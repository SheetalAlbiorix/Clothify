import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useState } from "react";
import { checkoutstyle } from "../styles/CheckoutStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { Spacing } from "../components/layout";

type CheckoutNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Checkout"
>;

const orderList = [
  {
    id: "1",
    image: images.jacket1,
    title: strings.brownjacket,
    size: strings.XL,
    price: strings.price1,
  },
  {
    id: "2",
    image: images.suit1,
    title: strings.brownsuit,
    size: strings.M,
    price: strings.price2,
  },
  {
    id: "3",
    image: images.jacket2,
    title: strings.brownshirt,
    size: strings.XL,
    price: strings.price1,
  },
];

const Checkout = () => {
  const colors = useColors();
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

  return (
    <View
      style={[
        checkoutstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={checkoutstyle.headerContainer}>
        <TouchableOpacity
          style={checkoutstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={checkoutstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[checkoutstyle.header, { color: colors.colors.text }]}>
          {strings.checkout}
        </Text>
      </View>

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
        renderItem={({ item }) => (
          <View style={checkoutstyle.orderItem}>
            <Image source={item.image} style={checkoutstyle.productImage} />
            <View>
              <Text
                style={[
                  checkoutstyle.productTitle,
                  { color: colors.colors.text },
                ]}
              >
                {item.title}
              </Text>
              <Text
                style={[
                  checkoutstyle.productSize,
                  { color: colors.colors.text },
                ]}
              >
                {strings.size} {item.size}
              </Text>
              <Text
                style={[
                  checkoutstyle.productPrice,
                  { color: colors.colors.text },
                ]}
              >
                {item.price}
              </Text>
            </View>
          </View>
        )}
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
          onPress={() => navigation.navigate({
            name: "PaymentMethod",
            params: {
              selectedAddress,
              selectedArrival,
            },
          })}
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
