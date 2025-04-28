import { View, Image, TouchableOpacity } from "react-native";
import { productstyle } from "../styles/ProductDetailStyle";

const ProductImageGallery = ({
  selectedImage,
  imageList,
  setSelectedImage,
}: any) => {
  return (
    <View style={productstyle.imageSelectionContainer}>
      <View style={productstyle.selectedImageBox}>
        <Image source={selectedImage} style={productstyle.productImage} />
      </View>
      <View style={productstyle.thumbnailContainer}>
        {imageList.map((image: any, index: number) => (
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
  );
};

export default ProductImageGallery;
