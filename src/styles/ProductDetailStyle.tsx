import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const productstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  headerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...layout.fixed,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginTop_60,
    ...layout.z100,
  },
  backButton: {
    ...layout.width_small,
    ...layout.height_small,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_25,
    ...borderStyles.w_1,
    borderColor: Colors.mediumbrown,
    backgroundColor: Colors.white,
  },
  heartButton: {
    ...layout.width_small,
    ...layout.height_small,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_25,
    ...borderStyles.w_1,
    borderColor: Colors.black,
    backgroundColor: Colors.white,
  },
  icon: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    tintColor: Colors.black,
  } as ImageStyle,
  icon1: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    tintColor: Colors.mediumbrown,
  } as ImageStyle,
  headerText: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
    ...textStyles.centerText,
    ...layout.flex_1,
  },
  productImage: {
    ...layout.width_420,
    ...layout.height_400,
    ...layout.resizeCover,
  } as ImageStyle,
  infoContainer: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingBottom_30,
  },
  subText: {
    ...Fonts.size_14,
    color: Colors.gray,
  },
  title: {
    ...Fonts.size_22,
    ...Fonts.weight_900,
  },
  sectionTitle: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
    ...Spacing.marginTop_15,
    ...Spacing.marginHorizontal_20,
  },
  description: {
    ...Fonts.size_14,
    color: Colors.darkgray,
  },
  readMore: {
    color: Colors.brown,
    ...Fonts.weight_900,
  },
  sizeContainer: {
    ...layout.row,
    ...Spacing.marginTop_10,
    ...Spacing.marginHorizontal_20,
  },
  sizeBox: {
    ...Spacing.paddingVertical_8,
    ...Spacing.paddingHorizontal_15,
    ...borderStyles.rounded_5,
    backgroundColor: Colors.lightgrey,
    ...Spacing.marginRight_10,
  },
  sizeText: {
    ...Fonts.size_14,
    ...Fonts.weight_900,
  },
  colorContainer: {
    ...Spacing.marginHorizontal_20,
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.marginTop_10,
    borderColor: Colors.mediumgrey,
    ...borderStyles.w_1,
    ...borderStyles.rounded_100,
    ...layout.width_175,
    backgroundColor: Colors.white,
    ...Spacing.marginBottom_20,
  },
  footerContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.height_120,
    ...Spacing.paddingHorizontal_20,
    backgroundColor: Colors.black,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...borderStyles.wTop_2,
    ...shadowStyles.shadowfooter,
  },
  totalPriceLabel: {
    ...Fonts.size_14,
    color: Colors.gray,
  },
  totalPrice: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
  },
  addToCartButton: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    backgroundColor: Colors.darkcoffee,
    ...Spacing.paddingVertical_10,
    ...Spacing.paddingHorizontal_70,
    ...borderStyles.rounded_25,
  },
  addToCartText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_800,
  },
  starIcon: {
    ...layout.height_30,
    ...layout.width_30,
  } as ImageStyle,
  icontextContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  ratingContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  ratingText: {
    ...Fonts.size_12,
    ...Fonts.weight_600,
  },
  colorBox: {
    ...layout.width_35,
    ...layout.height_35,
    ...borderStyles.rounded_18,
    ...Spacing.marginRight_10,
    ...borderStyles.w_2,
    ...borderStyles.transparent,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  selectedIndicator: {
    ...layout.width_20,
    ...layout.height_20,
    ...borderStyles.rounded_10,
    backgroundColor: Colors.white,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  selectedColorBox: {
    borderColor: Colors.lightgrey,
  },
  imageSelectionContainer: {
    ...layout.itemsCenter,
    ...Spacing.paddingVertical_10,
  },

  selectedImageBox: {
    backgroundColor: Colors.black,
    ...borderStyles.rounded_10,
  },

  thumbnailContainer: {
    ...layout.row,
    ...Spacing.marginTop_10,
    ...layout.justifyCenter,
  },

  thumbnailBox: {
    ...layout.width_small,
    ...layout.height_small,
    ...borderStyles.rounded_5,
    ...Spacing.marginHorizontal_5,
    ...layout.overflowHidden,
    ...borderStyles.w_1,
    borderColor: Colors.lightgrey,
  },

  thumbnailImage: {
    ...layout.fullWidth,
    ...layout.fullHeight,
    ...layout.resizeCover,
  } as ImageStyle,

  selectedThumbnail: {
    borderColor: Colors.brown,
    ...borderStyles.w_2,
  },
  bagIcon: {
    ...layout.height_30,
    ...layout.width_30,
    ...Spacing.margin_10,
    tintColor: Colors.white,
  } as ImageStyle,
});
