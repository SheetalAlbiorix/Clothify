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
            />
            <CouponCard
              code={strings.cashback12}
              amountNeeded={strings.dollar2}
              discount={strings.upto12offcashback}
            />
            <CouponCard
              code={strings.fest2cost}
              amountNeeded={strings.dollar28}
              discount={strings.get50offcombo}
            />
            <CouponCard
              code={strings.first100}
              amountNeeded={strings.dollar10}
              discount={strings.getflat100off}
            />
            <CouponCard
              code={strings.happynew500}
              amountNeeded={strings.dollar350}
              discount={strings.get500offflat}
            />
            <CouponCard
              code={strings.freeforall}
              amountNeeded={strings.dollar0}
              discount={strings.get100offfull}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Coupons;
