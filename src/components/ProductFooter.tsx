import { View, Text, TouchableOpacity, Image } from "react-native";
import { useColors } from "../hooks/useColors";
import { productstyle } from "../styles/ProductDetailStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import React from "react";

const ProductFooter = ({ navigation }: any) => {
  const colors = useColors();

  return (
    <View
      style={[
        productstyle.footerContainer,
        {
          backgroundColor: colors.colors.background,
          borderTopColor: colors.colors.borderColor,
        },
      ]}
    >
      <View>
        <Text
          style={[
            productstyle.totalPriceLabel,
            { color: colors.colors.textAccent },
          ]}
        >
          {strings.totalprice}
        </Text>
        <Text style={[productstyle.totalPrice, { color: colors.colors.text }]}>
          {strings.pricejacket}
        </Text>
      </View>
      <TouchableOpacity
        style={productstyle.addToCartButton}
        onPress={() => navigation.navigate("Cart", { appliedCoupon: "" })}
      >
        <Image source={images.bagIcon} style={productstyle.bagIcon} />
        <Text style={productstyle.addToCartText}>{strings.addtocart}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductFooter;
