import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";
import { Colors } from "../utils/Colors";

export const passmanagerstyle = StyleSheet.create({
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
  mainContainer: {
    ...Spacing.paddingHorizontal_20,
    ...layout.flex_1,
  },
  input: {
    ...layout.fullWidth,
    ...layout.height_small,
    ...borderStyles.w_1,
    borderColor: Colors.inputColor,
    ...borderStyles.rounded_25,
    ...Spacing.paddingHorizontal_15,
    backgroundColor: Colors.inputbgColor,
  },
  passwordContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.relative,
  },
  label: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10,
    ...Spacing.marginTop_20,
  },
  eyeIcon: {
    ...layout.absolute,
    ...layout.right15,
  },
  errorText: {
    color: Colors.red,
    ...Fonts.size_12,
    ...Spacing.marginTop_5,
    ...Spacing.marginLeft_5,
  },
  forgotpasscontainer: {
    ...Spacing.paddingTop_15,
  },
  forgotpass: {
    ...textStyles.EndText,
    ...Spacing.paddingVertical_10,
    ...textStyles.textUnderLine,
  },
  secondContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  footerContainer: {
    ...layout.height_normal,
    ...layout.width_420,
    ...borderStyles.wTop_2,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...shadowStyles.shadowLarge,
  },
  changebutton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_medsmall,
    ...layout.width_350,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  changepassText: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.white,
  },
});
