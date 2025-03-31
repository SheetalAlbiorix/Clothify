import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { images } from "../utils/images";
import { ColorNames, Colors } from "../utils/Colors";
import { productstyle } from "../styles/ProductDetailStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import TabBar from "../navigation/TabBar";

type ProductDetailNavigationProp = StackNavigationProp<
  RootStackParamList,
  "productDetail"
>;

const ProductDetail = () => {
  const colors = useColors();
  const navigation = useNavigation<ProductDetailNavigationProp>();

  const [selectedColor, setSelectedColor] = useState("Brown");
  const [selectedImage, setSelectedImage] = useState(images.jacket1);

  const imageList = [
    images.jacket1,
    images.jacket3,
    images.jacket4,
    images.jacket5,
    images.jacket6,
  ];

  return (
    <View
      style={[
        productstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
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

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={productstyle.imageSelectionContainer}>
          <View style={productstyle.selectedImageBox}>
            <Image source={selectedImage} style={productstyle.productImage} />
          </View>

          <View style={productstyle.thumbnailContainer}>
            {imageList.map((image, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(image)}
                style={[
                  productstyle.thumbnailBox,
                  selectedImage === image && productstyle.selectedThumbnail,
                ]}
              >
                <Image source={image} style={productstyle.thumbnailImage} />
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View
          style={[
            productstyle.infoContainer,
            { backgroundColor: colors.colors.background },
          ]}
        >
          <View style={productstyle.icontextContainer}>
            <Text style={productstyle.subText}>{strings.femalestyletext}</Text>
            <View style={productstyle.ratingContainer}>
              <Image source={images.starIcon} style={productstyle.starIcon} />
              <Text
                style={[productstyle.ratingText, { color: colors.colors.text }]}
              >
                {strings.rating45}
              </Text>
            </View>
          </View>

          <Text style={[productstyle.title, { color: colors.colors.text }]}>
            {strings.lightbrownjacket}
          </Text>
          <Text
            style={[productstyle.sectionTitle, { color: colors.colors.text }]}
          >
            {strings.productdetailheading}
          </Text>
          <Text
            style={[
              productstyle.description,
              { color: colors.colors.textAccent },
            ]}
          >
            {strings.loremtext}
            <Text style={productstyle.readMore}>{strings.readmore}</Text>
          </Text>

          <Text style={productstyle.sectionTitle}>{strings.selectsize}</Text>
          <View style={productstyle.sizeContainer}>
            {[
              strings.S,
              strings.M,
              strings.L,
              strings.XL,
              strings.XXL,
              strings.XXXL,
            ].map((size) => (
              <TouchableOpacity key={size} style={productstyle.sizeBox}>
                <Text style={productstyle.sizeText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text
            style={[productstyle.sectionTitle, { color: colors.colors.text }]}
          >
            Select Color: {selectedColor}
          </Text>
          <View style={productstyle.colorContainer}>
            {[
              Colors.darkbrown,
              Colors.mediumbrown,
              Colors.brown,
              Colors.black,
            ].map((color, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedColor(ColorNames[color])}
                style={[
                  productstyle.colorBox,
                  { backgroundColor: color },
                  selectedColor === color && productstyle.selectedColorBox,
                ]}
              />
            ))}
          </View>
        </View>

        <View
          style={[
            productstyle.footerContainer,
            {
              backgroundColor: colors.colors.background,
              borderColor: colors.colors.borderColor,
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
              Total Price
            </Text>
            <Text
              style={[productstyle.totalPrice, { color: colors.colors.text }]}
            >
              $83.97
            </Text>
          </View>
          <TouchableOpacity style={productstyle.addToCartButton}>
            <Image source={images.bagIcon} style={productstyle.bagIcon} />
            <Text style={productstyle.addToCartText}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;
