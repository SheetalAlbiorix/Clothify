import React, { useState, useMemo } from "react";
import { View, ScrollView } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
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
import Data from "../utils/Data.json";

type ProductDetailRouteProp = RouteProp<RootStackParamList, "productDetail">;
type ProductDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "productDetail"
>;

const ProductDetail = () => {
  const route = useRoute<ProductDetailRouteProp>();
  const navigation = useNavigation<ProductDetailNavigationProp>();
  const { id, name, image1, price, image, rating } = route.params;
  const colors = useColors();
  const { statusBarStyle } = useTheme();

  const [selectedColor, setSelectedColor] = useState(strings.darkbrown);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState(image);

  const imageList = useMemo(() => {
    return Data.imageList.map((key) => images[key as keyof typeof images]);
  }, []);

  const sizeList = useMemo(() => {
    return Data.sizeList.map((size) => strings[size as keyof typeof strings]);
  }, []);

  const colorList = useMemo(() => {
    return Data.colorList.map((color) => Colors[color as keyof typeof Colors]);
  }, []);

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

        <ProductDetailInfo
          name={name}
          price={price.toString()}
          rating={rating}
        />

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
