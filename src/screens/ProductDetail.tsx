import { View, ScrollView } from "react-native";
import React, { useState, useMemo } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { images } from "../utils/images";
import { Colors } from "../utils/Colors";
import { productstyle } from "../styles/ProductDetailStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";
import ProductImageGallery from "../components/ProductImageGallery";
import ProductSizeSelector from "../components/ProductSizeSelector";
import ProductDetailInfo from "../components/ProductDetailInfo";
import ProductColorSelector from "../components/ProductColorSelector";
import ProductFooter from "../components/ProductFooter";
import ProductHeader from "../components/ProductHeader";

type ProductDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "productDetail"
>;

const ProductDetail = () => {
  const colors = useColors();
  const navigation = useNavigation<ProductDetailNavigationProp>();
  const { statusBarStyle } = useTheme();

  const [selectedColor, setSelectedColor] = useState("Dark Brown");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(images.jacket1);

  const imageList = useMemo(
    () => [
      images.jacket1,
      images.jacket3,
      images.jacket4,
      images.jacket5,
      images.jacket6,
    ],
    []
  );

  const sizeList = useMemo(
    () => [
      strings.S,
      strings.M,
      strings.L,
      strings.XL,
      strings.XXL,
      strings.XXXL,
    ],
    []
  );

  const colorList = useMemo(
    () => [Colors.darkbrown, Colors.mediumbrown, Colors.brown, Colors.black],
    []
  );

  return (
    <View
      style={[
        productstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <ProductHeader navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImageGallery
          selectedImage={selectedImage}
          imageList={imageList}
          setSelectedImage={setSelectedImage}
        />
        <ProductDetailInfo />
        <ProductSizeSelector
          selectedSize={selectedSize}
          setSelectedSize={setSelectedSize}
          sizeList={sizeList}
        />
        <ProductColorSelector
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          colorList={colorList}
        />
      </ScrollView>
      <ProductFooter navigation={navigation} />
    </View>
  );
};

export default ProductDetail;
