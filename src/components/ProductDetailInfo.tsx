// import { View, Text, Image } from "react-native";
// import { useColors } from "../hooks/useColors";
// import { productstyle } from "../styles/ProductDetailStyle";
// import { strings } from "../utils/strings";
// import { images } from "../utils/images";
// import React from "react";

// const ProductDetailInfo = () => {
//   const colors = useColors();

//   return (
//     <View
//       style={[
//         productstyle.infoContainer,
//         { backgroundColor: colors.colors.background },
//       ]}
//     >
//       <View style={productstyle.icontextContainer}>
//         <Text style={productstyle.subText}>{strings.femalestyletext}</Text>
//         <View style={productstyle.ratingContainer}>
//           <Image source={images.starIcon} style={productstyle.starIcon} />
//           <Text
//             style={[productstyle.ratingText, { color: colors.colors.text }]}
//           >
//             {strings.rating45}
//           </Text>
//         </View>
//       </View>
//       <Text style={[productstyle.title, { color: colors.colors.text }]}>
//         {strings.lightbrownjacket}
//       </Text>
//       <Text style={[productstyle.sectionTitle, { color: colors.colors.text }]}>
//         {strings.productdetailheading}
//       </Text>
//       <Text
//         style={[productstyle.description, { color: colors.colors.textAccent }]}
//       >
//         {strings.loremtext}
//         <Text style={productstyle.readMore}>{strings.readmore}</Text>
//       </Text>
//     </View>
//   );
// };

// export default ProductDetailInfo;

import { View, Text, Image } from "react-native";
import { useColors } from "../hooks/useColors";
import { productstyle } from "../styles/ProductDetailStyle";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import React from "react";
import { ProductDetaillInfoProps } from "../types/types";

const ProductDetailInfo = ({
  name,
  price,
  rating,
}: ProductDetaillInfoProps) => {
  const colors = useColors();

  return (
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
            {rating.toString()}
          </Text>
        </View>
      </View>
      <Text style={[productstyle.title, { color: colors.colors.text }]}>
        {name}
      </Text>
      <Text style={[productstyle.sectionTitle, { color: colors.colors.text }]}>
        {price}
      </Text>
      <Text
        style={[productstyle.description, { color: colors.colors.textAccent }]}
      >
        {strings.loremtext}
        <Text style={productstyle.readMore}>{strings.readmore}</Text>
      </Text>
    </View>
  );
};

export default ProductDetailInfo;
