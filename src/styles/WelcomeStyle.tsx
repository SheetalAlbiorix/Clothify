import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";
import { borderStyles, layout, Spacing, textStyles } from "../components/layout";

export const welcomestyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.paddingHorizontal_20,
    backgroundColor: Colors.mediumgrey,
  },
  imageContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginBottom_50,
    ...layout.height_500,
  },
  largeImageWrapper: {
    ...layout.flex_2,
    ...borderStyles.rounded_20,
    ...Spacing.marginLeft_20,
    ...layout.overflowHidden,
  },
  largeImage: {
    ...layout.mediumWidth,
    ...layout.height_450,
    ...layout.resizeCover,
  } as ImageStyle,
  smallImagesWrapper: {
    ...layout.flex_1,
    ...layout.justifyBetween,
    ...Spacing.marginRight_25,
  },
  smallImage1: {
    ...Spacing.marginBottom_10,
    ...layout.fullMoreWidth,
    ...layout.resizeCover,
  } as ImageStyle,
  smallImage2: {
    ...Spacing.marginRight_10,
    ...layout.fullMoreWidth,
    ...layout.height_180,
    ...layout.resizeCover,
    ...borderStyles.rounded_20,
  } as ImageStyle,
  heading: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
    ...textStyles.centerText,
    ...Spacing.marginBottom_20,
  },
  subtitle: {
    ...Fonts.size_16,
    ...textStyles.centerText,
    ...Spacing.marginBottom_25,
    color: Colors.mediumgrey,
  },
  button: {
    backgroundColor: Colors.darkbrown,
    ...Spacing.paddingVertical_15,
    ...Spacing.paddingHorizontal_40,
    ...borderStyles.rounded_30,
    ...Spacing.marginBottom_25,
  },
  buttonText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_900,
    ...textStyles.centerText,
  },
  footerText: {
    ...Fonts.size_14,
    ...textStyles.centerText,
    color: Colors.gray,
  },
  signInText: {
    color: Colors.darkbrown,
    ...Fonts.weight_900,
  },
});
