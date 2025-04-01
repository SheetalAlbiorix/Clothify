import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { checkoutstyle } from "../styles/CheckoutStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";

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

  return (
    <View style={[checkoutstyle.container, { backgroundColor: colors.colors.background }]}>
      <View
        style={checkoutstyle.headerContainer}>
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
      
      <Text style={[checkoutstyle.shippingheader, { color: colors.colors.text }]}>
        Shipping Address
      </Text>
      <View style={checkoutstyle.homecontainer}>
        <Image source={images.locationpin} style={[checkoutstyle.locationpinImage, { tintColor: colors.colors.tintColor }]} />
        <View>
          <Text style={[checkoutstyle.hometext, { color: colors.colors.text }]}>
            Home
          </Text>
          <Text style={checkoutstyle.address}>
            1901 Thornridge Cir. Shiloh, Hawaii 81063
          </Text>
        </View>
        <TouchableOpacity
          style={[
            checkoutstyle.changeButton,
            { borderColor: colors.colors.borderColor },
          ]}
        >
          <Text style={checkoutstyle.changetext}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <Text style={[checkoutstyle.shippingtypeheader, { color: colors.colors.text }]}>
        Choose Shipping Type
      </Text>
      <View style={checkoutstyle.economycontainer}>
        <Image source={images.boxtime} style={[checkoutstyle.boxtime, { tintColor: colors.colors.tintColor }]} />
        <View>
          <Text style={[checkoutstyle.economytext, { color: colors.colors.text }]}>
            Economy
          </Text>
          <Text style={checkoutstyle.estimatedArrival}>
            Estimated Arrival 25 August 2023
          </Text>
        </View>
        <TouchableOpacity
          style={[
            checkoutstyle.changeButton,
            { borderColor: colors.colors.borderColor },
          ]}
        >
          <Text style={checkoutstyle.changetext}>CHANGE</Text>
        </TouchableOpacity>
      </View>

      <Text style={[checkoutstyle.orderlistheader, { color: colors.colors.text }]}>
        Order List
      </Text>
      <FlatList
        data={orderList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={checkoutstyle.orderItem}>
            <Image source={item.image} style={checkoutstyle.productImage} />
            <View>
              <Text
                style={[checkoutstyle.productTitle, { color: colors.colors.text }]}
              >
                {item.title}
              </Text>
              <Text style={[checkoutstyle.productSize, { color: colors.colors.text }]}>
                Size : {item.size}
              </Text>
              <Text
                style={[checkoutstyle.productPrice, { color: colors.colors.text }]}
              >
                {item.price}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={checkoutstyle.footer}>
        <TouchableOpacity style={checkoutstyle.paymentButton}>
          <Text style={checkoutstyle.paymentText}>Continue to Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Checkout;