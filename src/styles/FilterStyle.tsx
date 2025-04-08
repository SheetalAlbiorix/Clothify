import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const filterstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  headerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...Spacing.paddingRight_80,
    ...Spacing.marginBottom_20,
    ...Spacing.marginTop_60,
    ...Spacing.paddingHorizontal_20,
  },
  backButton: {
    backgroundColor: Colors.white,
    ...Spacing.padding_10,
    ...borderStyles.w_1,
    borderColor: Colors.mediumbrown,
    ...borderStyles.rounded_30,
    ...layout.height_55,
    ...layout.width_55,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  leftarrowImage: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
  } as ImageStyle,
  header: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
    ...textStyles.centerText,
    ...layout.flex_1,
  },
  BrandsHeader: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10,
  },
  MainViewContainer: {
    ...Spacing.paddingBottom_20,
  },
  BrandsContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  genderContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  genderText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10,
  },
  sortbyContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  sortbyText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10,
  },
  pricerangeText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10,
  },
  pricerangeContainer: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_10,
  },
  reviewcontainer: {
    ...Spacing.paddingHorizontal_20,
  },
  reviewText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10,
  },
  MainContainer: {
    ...Spacing.paddingHorizontal_5,
  },
  ratingTextContainer: {
    ...layout.row,
    ...layout.justifyBetween,
  },
  ratingText: {
    ...Spacing.marginTop_10,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  starIconContainer: {
    ...layout.row,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  starIconImage: {
    ...layout.height_30,
    ...layout.width_30,
  } as ImageStyle,
  radio: {
    ...layout.width_20,
    ...layout.height_20,
    ...borderStyles.rounded_15,
    ...borderStyles.w_1,
    ...borderStyles.darkishgray,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginRight_20,
  },
  selectedRadio: {
    ...layout.width_12,
    ...layout.height_12,
    ...borderStyles.rounded_15,
    backgroundColor: Colors.darkcoffee,
    ...borderStyles.w_1,
    ...borderStyles.black,
  },
  footer: {
    ...layout.height_normal,
    ...layout.width_420,
    ...borderStyles.wTop_2,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...layout.justifyBetween,
    ...layout.row,
    ...layout.itemsCenter,
    ...shadowStyles.shadowLarge,
    ...Spacing.paddingHorizontal_20,
  },
  resetButton: {
    backgroundColor: Colors.midGREY,
    ...layout.height_medsmall,
    ...layout.width_180,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  resetText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.darkcoffee,
  },
  applyButton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_medsmall,
    ...layout.width_180,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  applyText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.white,
  },
});
