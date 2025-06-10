import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Easing,
  Animated,
} from "react-native";
import React, { useEffect, useRef } from "react";
import { paymentstyles } from "../styles/PaymentStyle";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HeaderGlobal";

type PaymentNavigationProp = StackNavigationProp<RootStackParamList, "Payment">;

const Payment = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<PaymentNavigationProp>();

  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      easing: Easing.elastic(2),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View
      style={[
        paymentstyles.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="payment" />
      <View style={paymentstyles.paymenttextIconContainer}>
        <Animated.Image
          source={images.doneIcon}
          style={[
            paymentstyles.doneIconImage,
            { transform: [{ scale: scaleAnim }] },
          ]}
        />
        <Text
          style={[paymentstyles.Paymentsuccess, { color: colors.colors.text }]}
        >
          {strings.paymentsuccess}
        </Text>
        <Text
          style={[
            paymentstyles.thankyouText,
            { color: colors.colors.textAccent },
          ]}
        >
          {strings.thankyoupurchase}
        </Text>
      </View>
      <View
        style={[
          paymentstyles.footer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity
          style={paymentstyles.paymentButton}
          onPress={() =>
            navigation.navigate("TrackOrder", {
              orderId: strings.numbers,
              orderData: {
                id: strings.numbers,
                name: strings.brownshirt,
                size: strings.M,
                price: Number(strings.fotynine),
                image: images.creamyshirt,
              },
            })
          }
        >
          <Text style={paymentstyles.paymentText}>{strings.vieworder}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            paymentstyles.ereceiptbutton,
            { borderColor: colors.colors.borderColor },
          ]}
          onPress={() => navigation.navigate("Payment")}
        >
          <Text style={paymentstyles.ereceiptText}>{strings.viewereceipt}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Payment;
