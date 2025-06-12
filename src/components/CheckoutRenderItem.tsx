import React from "react";
import { View, Text, Image } from "react-native";
import { checkoutstyle } from "../styles/CheckoutStyle";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";
import { checkoutRenderItemProps } from "../types/types";

const CheckoutRenderItem: React.FC<checkoutRenderItemProps> = ({ item }) => {
  const colors = useColors();

  return (
    <View style={checkoutstyle.orderItem}>
      <Image source={item.image} style={checkoutstyle.productImage} />
      <View>
        <Text
          style={[checkoutstyle.productTitle, { color: colors.colors.text }]}
        >
          {item.title}
        </Text>
        <Text
          style={[checkoutstyle.productSize, { color: colors.colors.text }]}
        >
          {strings.size} {item.size}
        </Text>
        <Text
          style={[checkoutstyle.productPrice, { color: colors.colors.text }]}
        >
          {item.price}
        </Text>
      </View>
    </View>
  );
};

export default CheckoutRenderItem;
