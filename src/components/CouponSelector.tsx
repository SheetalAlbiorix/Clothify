import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type CouponNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

export const CouponSelector = React.memo(() => {
  const colors = useColors();
  const navigation = useNavigation<CouponNavigationProp>();

  return (
    <View style={cartitemstyle.couponselectContainer}>
      <Text
        style={[
          cartitemstyle.couponvalidorpromo,
          { color: colors.colors.text },
        ]}
      >
        {strings.haveavalidcoupon}
      </Text>
      <TouchableOpacity
        style={cartitemstyle.couponButton}
        onPress={() => navigation.navigate("Coupons")}
      >
        <Text style={cartitemstyle.seeallcouponText}>
          {strings.seeallcoupons}
        </Text>
        <Image
          source={images.arrowright}
          style={[
            cartitemstyle.arrowrightImage,
            { tintColor: colors.colors.tintColor },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
});
