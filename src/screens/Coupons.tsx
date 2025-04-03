import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { couponsStyle } from "../styles/CouponsStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import CouponCard from "../components/CouponCard";

type CouponNavigationProp = StackNavigationProp<RootStackParamList, "Coupons">;

const Coupons = () => {
  const colors = useColors();
  const navigation = useNavigation<CouponNavigationProp>();
  return (
    <View
      style={[
        couponsStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={couponsStyle.headerContainer}>
        <TouchableOpacity
          style={couponsStyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={couponsStyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[couponsStyle.header, { color: colors.colors.text }]}>
          {strings.coupon}
        </Text>
      </View>
      <View style={couponsStyle.MainView}>
        <Text
          style={[couponsStyle.bestforyouText, { color: colors.colors.text }]}
        >
          {strings.bestoffersText}
        </Text>
        <ScrollView>   
        <View style={[couponsStyle.couponWrapper, { backgroundColor: colors.colors.background }]}>
          <CouponCard 
            code={strings.welcome200} 
            amountNeeded={strings.dollar2} 
            discount="50% OFF" 
          />
          <CouponCard 
            code={strings.cashback12} 
            amountNeeded={strings.dollar2} 
            discount="Up to $12.00 Cashback" 
          />
          <CouponCard 
            code={strings.fest2cost} 
            amountNeeded={strings.dollar28} 
            discount="Get 50% OFF for Combo" 
          />
          <CouponCard 
            code={strings.first100} 
            amountNeeded={strings.dollar10} 
            discount="GEt Flat 100% OFF on Total Amount" 
          />
          <CouponCard 
            code={strings.happynew500} 
            amountNeeded={strings.dollar350} 
            discount="Get 500% Flat Discount" 
          />
          <CouponCard 
            code={strings.freeforall} 
            amountNeeded={strings.dollar0} 
            discount="Get 100% OFF and Take it for free Only for new Registered User" 
          />
        </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Coupons;