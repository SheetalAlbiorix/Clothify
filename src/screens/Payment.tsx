import { View, Text, TouchableOpacity, Image, Easing, Animated } from "react-native";
import React, { useEffect, useRef } from "react";
import { paymentstyles } from "../styles/PaymentStyle";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { images } from "../utils/images";
import { strings } from "../utils/strings";

type PaymentNavigationProp = StackNavigationProp<RootStackParamList, "Payment">;

const Payment = () => {
  const colors = useColors();
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
      <View style={paymentstyles.headerContainer}>
        <TouchableOpacity
          style={paymentstyles.backButton}
          onPress={() => navigation.navigate('Tab', { name: "Home", location: ""  })}
        >
          <Image
            source={images.leftarrow}
            style={paymentstyles.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[paymentstyles.header, { color: colors.colors.text }]}>
          {strings.payment}
        </Text>
      </View>
      <View style={paymentstyles.paymenttextIconContainer}>
        <Animated.Image 
          source={images.doneIcon} 
          style={[
            paymentstyles.doneIconImage, 
            { transform: [{ scale: scaleAnim }] }
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
        <TouchableOpacity style={paymentstyles.paymentButton} onPress={() => navigation.navigate('TrackOrder', { orderId: '12345', orderData: { id: '12345', name: 'Sample Item', size: 'M', price: 49.99, image: 'sample-image-url' } })}>
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