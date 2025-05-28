import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";

interface CartHeaderProps {
  onBack: () => void;
}

export const CartHeader = React.memo(({ onBack }: CartHeaderProps) => {
  const colors = useColors();

  return (
    <View style={cartitemstyle.headerContainer}>
      <TouchableOpacity style={cartitemstyle.backButton} onPress={onBack}>
        <Image source={images.leftarrow} style={cartitemstyle.leftarrowImage} />
      </TouchableOpacity>
      <Text style={[cartitemstyle.header, { color: colors.colors.text }]}>
        {strings.mycart}
      </Text>
    </View>
  );
});
