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

export const chooseshippingStyle = StyleSheet.create({
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
  chooseaddress: {
    ...Spacing.paddingHorizontal_20,
  },
  chooseaddressItem: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...Spacing.paddingVertical_20,
    ...borderStyles.wBottom_1,
    borderBottomColor: Colors.lightgrey,
  },
  chooseaddressInfo: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  boxtimeImage: {
    ...layout.width_20,
    ...layout.height_20,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  chooseaddressTitle: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  chooseaddressDetails: {
    ...Fonts.size_14,
    color: Colors.footerColor,
  },
  radioButtonContainer: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    ...borderStyles.rounded_12,
    ...borderStyles.w_2,
    borderColor: Colors.darkcoffee,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  selectedRadio: {
    ...layout.width_14,
    ...layout.height_14,
    ...borderStyles.rounded_7,
    backgroundColor: Colors.darkcoffee,
  },
  applyButton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_medsmall,
    ...layout.width_350,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...borderStyles.rounded_30,
    ...Spacing.marginTop_20,
  },
  applyText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  footer: {
    ...layout.height_normal,
    ...layout.width_420,
    ...borderStyles.wTop_2,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...shadowStyles.shadowLarge,
  },
});
