import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const SignUpStyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.paddingHorizontal_20,
    backgroundColor: Colors.white,
  },
  singinTextContainer: {
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
  },
  heading: {
    ...Fonts.size_28,
    ...Fonts.weight_900,
    ...Spacing.marginBottom_5,
  },
  SignIntextSecondary: {
    ...Fonts.size_14,
    color: Colors.footerColor,
  },
  inputContainer: {
    ...layout.fullWidth,
    ...Spacing.marginBottom_15,
  },
  label: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_5,
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
  passwordInputContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.relative,
  },
  eyeIcon: {
    ...layout.absolute,
    ...layout.right15,
  },
  AgreeTerms: {
    ...textStyles.CenterText,
    ...Fonts.size_14,
    color: Colors.white,
    ...Spacing.marginBottom_10,
  },
  termscondition: {
    ...textStyles.CenterText,
    ...Fonts.size_14,
    color: Colors.mediumbrown,
    ...Spacing.marginBottom_10,
    ...textStyles.textUnderLine,
  },
  signInButton: {
    ...layout.fullWidth,
    ...layout.height_small,
    ...borderStyles.rounded_25,
    backgroundColor: Colors.mediumbrown,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_20,
  },
  signInButtonText: {
    ...Fonts.size_16,
    color: Colors.white,
    ...Fonts.weight_900,
  },
  orSignInWith: {
    ...Fonts.size_14,
    color: Colors.footerColor,
    ...Spacing.marginBottom_10,
  },
  socialContainer: {
    ...layout.row,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_20,
  },
  socialButton: {
    ...layout.width_small,
    ...layout.height_small,
    ...borderStyles.rounded_25,
    ...borderStyles.w_1,
    borderColor: Colors.inputColor,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginHorizontal_10,
  },
  socialIcon: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    ...layout.resizeContain,
  } as ImageStyle,
  signUpContainer: {
    ...layout.row,
    ...Spacing.marginTop_10,
  },
  signUpText: {
    ...Fonts.size_14,
    color: Colors.footerColor,
  },
  signUpLink: {
    ...Fonts.size_14,
    color: Colors.mediumbrown,
    ...Fonts.weight_900,
    ...Spacing.marginLeft_5,
  },
  disabledButton: {
    backgroundColor: Colors.midGREY,
    ...layout.opacity06,
  },

  checkboxContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.gap_10,
    ...Spacing.marginVertical_10,
  },
  agreeconditionContainer: {
    ...layout.row,
    ...Spacing.gap_5,
  },
  errorText: {
    color: Colors.red,
    ...Fonts.size_12,
    ...Spacing.marginTop_5,
    ...Spacing.marginLeft_5,
  },
});
