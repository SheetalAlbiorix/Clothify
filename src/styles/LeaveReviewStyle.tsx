import { ImageStyle, StyleSheet } from "react-native";
import {
  shadowStyles,
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const leavereviewstyle = StyleSheet.create({
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
  headerorderdata: {
    ...Fonts.size_22,
    ...Fonts.weight_900,
    ...Spacing.marginBottom_20,
  },
  productRow: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
  },
  image: {
    ...layout.highWidth,
    ...layout.height_80,
    ...borderStyles.rounded_8,
  } as ImageStyle,
  productInfo: {
    ...layout.flex_1,
    ...Spacing.marginLeft_10,
  },
  title: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  price: {
    ...Spacing.marginTop_4,
  },
  reorderButton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_40,
    ...layout.width_80,
    ...borderStyles.rounded_20,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginTop_20,
  },
  reorderText: {
    ...Fonts.size_12,
    ...Fonts.weight_600,
    color: Colors.white,
  },
  question: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
    ...textStyles.centerText,
  },
  subText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    ...Spacing.marginVertical_8,
  },
  starRow: {
    ...layout.row,
    ...Spacing.marginBottom_16,
  },
  input: {
    ...borderStyles.w_1,
    ...borderStyles.darkishgray,
    ...borderStyles.rounded_8,
    ...Spacing.padding_10,
    ...layout.MinHeight_150,
    ...textStyles.textAlignVerticalTop,
  },
  submitButton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...layout.height_small,
    ...layout.width_180,
    ...borderStyles.rounded_30,
    ...Spacing.marginTop_20,
  },
  submitText: {
    color: Colors.white,
    ...textStyles.centerText,
    ...Fonts.weight_900,
  },
  cancelButton: {
    backgroundColor: Colors.midGREY,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...layout.height_small,
    ...layout.width_180,
    ...borderStyles.rounded_30,
    ...Spacing.marginTop_20,
  },
  cancelText: {
    color: Colors.darkcoffee,
    ...textStyles.centerText,
    ...Fonts.weight_900,
  },
  text: {
    ...Fonts.size_15,
    ...Fonts.weight_600,
  },
  buttonContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  starratingcontainer: {
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  divider: {
    ...Spacing.marginBottom_30,
    ...Spacing.marginTop_30,
    ...layout.height_05,
    backgroundColor: Colors.mediumgrey,
  },
  flexcontainer: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
  },
  cameraIconImage: {
    tintColor: Colors.mediumbrown,
    ...layout.height_30,
    ...layout.width_30,
  } as ImageStyle,
  cameraContainer: {
    ...Spacing.paddingHorizontal_10,
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.height_30,
    ...layout.width_120,
  },
  addphotoText: {
    color: Colors.mediumbrown,
    ...Fonts.size_14,
    ...Fonts.weight_400,
  },
  imagemedia: {
    ...layout.width_normal,
    ...layout.height_normal,
  } as ImageStyle,
});
