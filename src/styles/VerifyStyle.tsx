import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const verifystyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.paddingHorizontal_20,
    backgroundColor: Colors.white,
  },
  verifyTextContainer: {
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
  },
  heading: {
    ...Fonts.size_28,
    ...Fonts.weight_900,
    ...Spacing.marginBottom_5,
  },
  VerifytextSecondary: {
    ...Spacing.margin_5,
    ...Fonts.size_16,
    color: Colors.footerColor,
  },
  emailtextdemo: {
    color: Colors.mediumbrown,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  OtpInputContainer: {
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...layout.height_small,
    ...layout.width_300,
    ...Spacing.margin_20,
    ...layout.row,
    ...Spacing.gap_10,
  },
  OtpInputvalue: {
    ...layout.height_40,
    ...layout.width_55,
    ...borderStyles.rounded_15,
    ...borderStyles.w_1,
    borderColor: Colors.mediumgrey,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    color: Colors.white,
    ...textStyles.centerText,
    ...textStyles.letterspace10,
    ...Fonts.size_24,
  },
  Otpreceivecontainer: {
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.margin_20,
  },
  didntreceiveotp: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    color: Colors.gray,
  },
  resendcode: {
    color: Colors.mediumbrown,
    ...textStyles.textUnderLine,
    ...Fonts.size_14,
    ...Fonts.weight_600,
  },
  verifybutton: {
    ...layout.height_small,
    ...layout.width_350,
    ...Spacing.margin_20,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    backgroundColor: Colors.mediumbrown,
    ...borderStyles.rounded_25,
  },
  verifyText: {
    color: Colors.white,
    ...Fonts.size_18,
    ...Fonts.weight_900,
  },
  inputplaceholderText: {
    color: Colors.inputColor,
  },
  backButton: {
    ...layout.height_30,
    ...layout.width_30,
    ...layout.absolute,
    ...layout.top50,
    ...layout.left20,
    ...layout.z10,
    ...Spacing.padding_30,
    borderColor: Colors.mediumbrown,
    ...borderStyles.w_1,
    ...borderStyles.rounded_40,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },

  leftarrowImage: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    tintColor: Colors.black,
  },
});
