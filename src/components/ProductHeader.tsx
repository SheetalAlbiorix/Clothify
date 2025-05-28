import { View, TouchableOpacity, Text, Image } from "react-native";
import { useColors } from "../hooks/useColors";
import { productstyle } from "../styles/ProductDetailStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import React from "react";

const ProductHeader = ({ navigation }: any) => {
  const colors = useColors();

  return (
    <View style={productstyle.headerContainer}>
      <TouchableOpacity
        style={productstyle.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image source={images.leftarrow} style={productstyle.icon} />
      </TouchableOpacity>
      <Text style={[productstyle.headerText, { color: colors.colors.text }]}>
        {strings.productdetailheading}
      </Text>
      <TouchableOpacity style={productstyle.heartButton}>
        <Image source={images.likeIcon} style={productstyle.icon1} />
      </TouchableOpacity>
    </View>
  );
};

export default ProductHeader;
