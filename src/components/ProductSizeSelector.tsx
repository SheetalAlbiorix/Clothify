import { View, Text, TouchableOpacity } from "react-native";
import { useColors } from "../hooks/useColors";
import { productstyle } from "../styles/ProductDetailStyle";
import { strings } from "../utils/strings";
import { Colors } from "../utils/Colors";
import React from "react";

const ProductSizeSelector = ({
  selectedSize,
  setSelectedSize,
  sizeList,
}: any) => {
  const colors = useColors();

  return (
    <>
      <Text
        style={[productstyle.sectionSizeTitle, { color: colors.colors.text }]}
      >
        {strings.selectsize}
      </Text>
      <View style={productstyle.sizeContainer}>
        {sizeList.map((size: string) => (
          <TouchableOpacity
            key={size}
            style={[
              productstyle.sizeBox,
              selectedSize === size && { backgroundColor: Colors.mediumbrown },
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                productstyle.sizeText,
                selectedSize === size && { color: Colors.white },
              ]}
            >
              {size}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ProductSizeSelector;
