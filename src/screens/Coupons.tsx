import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { couponsStyle } from "../styles/CouponsStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useNavigation } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import CouponCard from "../components/CouponCard";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type CouponNavigationProp = StackNavigationProp<RootStackParamList, "Coupons">;

const Coupons = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<CouponNavigationProp>();
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);

  return (
    <View
      style={[
        couponsStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
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
          <View
            style={[
              couponsStyle.couponWrapper,
              { backgroundColor: colors.colors.background },
            ]}
          >
            <CouponCard
              code={strings.welcome200}
              amountNeeded={strings.dollar2}
              discount={strings.fiftyoff}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.cashback12}
              amountNeeded={strings.dollar2}
              discount={strings.upto12offcashback}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.fest2cost}
              amountNeeded={strings.dollar28}
              discount={strings.get50offcombo}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.first100}
              amountNeeded={strings.dollar10}
              discount={strings.getflat100off}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.happynew500}
              amountNeeded={strings.dollar350}
              discount={strings.get500offflat}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
            <CouponCard
              code={strings.freeforall}
              amountNeeded={strings.dollar0}
              discount={strings.get100offfull}
              onApplyCoupon={(appliedCode) => {
                setAppliedCoupon(appliedCode);
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Coupons;
