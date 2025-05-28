import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";

type ProductInfoProps = {
  name: string;
  size: string;
  qty: number;
  price: number;
  image: any;
};

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  size,
  qty,
  price,
  image,
}) => {
  const colors = useColors();

  return (
    <View style={leavereviewstyle.productRow}>
      <Image source={image} style={leavereviewstyle.image} />
      <View style={leavereviewstyle.productInfo}>
        <Text style={[leavereviewstyle.title, { color: colors.colors.text }]}>
          {name}
        </Text>
        <Text
          style={[leavereviewstyle.text, { color: colors.colors.textAccent }]}
        >
          {strings.size} {size} {strings.QTY} {qty}
        </Text>
        <Text style={[leavereviewstyle.price, { color: colors.colors.text }]}>
          {strings.$} {price}
        </Text>
      </View>
      <TouchableOpacity style={leavereviewstyle.reorderButton}>
        <Text style={leavereviewstyle.reorderText}>{strings.reorder}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductInfo;
