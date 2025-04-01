import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const newpassstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingTop_50,
  },
  backButton: {
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    ...borderStyles.rounded_30,
    ...borderStyles.w_1,
    ...borderStyles.mediumBrown,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_70,
  },
  leftarrowImage: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
  } as ImageStyle,
  verifyTextContainer: {
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
  },
  heading: {
    ...Fonts.size_22,
    ...Fonts.weight_900,
  },
  VerifytextSecondary: {
    ...Fonts.size_14,
    ...textStyles.centerText,
    ...Spacing.marginTop_5,
  },
  emailtextdemo: {
    ...Fonts.size_14,
    ...textStyles.centerText,
    ...Spacing.marginTop_5,
    color: Colors.footerColor,
  },
  inputContainer: {
    ...Spacing.marginBottom_15,
  },
  inputLabel: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_5,
  },
  inputField: {
    ...layout.row,
    ...layout.itemsCenter,
    backgroundColor: Colors.lightWhite,
    ...borderStyles.rounded_10,
    ...Spacing.paddingHorizontal_15,
    ...layout.height_small,
  },
  textInput: {
    ...layout.flex_1,
    ...Fonts.size_16,
    color: Colors.black,
  },
  eyeIcon: {
    ...layout.width_20,
    ...layout.height_20,
    tintColor: Colors.footerColor,
  },
  errorText: {
    color: Colors.red,
    ...Fonts.size_12,
    ...Spacing.marginTopminus5,
    ...Spacing.marginBottom_10,
    ...textStyles.leftText,
  },
  submitButton: {
    ...layout.height_small,
    ...borderStyles.rounded_25,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginTop_10,
    backgroundColor: Colors.mediumbrown,
  },
  submitButtonText: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
    color: Colors.white,
  },
});
