import { ImageStyle, StyleSheet, ViewStyle } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const checkoutstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  headerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...layout.fixed,
    ...Spacing.marginTop_60,
    ...Spacing.marginBottom_20,
    ...layout.z100,
    ...Spacing.paddingHorizontal_20,
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
  shippingheader: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginTop_10,
  },
  homecontainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginTop_10,
    ...borderStyles.wBottom_1,
    ...borderStyles.bordergray,
    ...Spacing.paddingBottom_20,
  },
  locationpinImage: {
    ...layout.width_20,
    ...layout.height_20,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  hometext: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  address: {
    ...Fonts.size_14,
    color: Colors.footerColor,
  },
  changeButton: {
    ...Spacing.marginauto,
    ...Spacing.padding_5,
    ...borderStyles.w_1,
    ...borderStyles.rounded_5,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  } as ViewStyle,
  changetext: {
    ...Fonts.size_12,
    ...Fonts.weight_400,
    color: Colors.darkbrown,
  },
  shippingtypeheader: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginTop_20,
  },
  economycontainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginTop_10,
    ...borderStyles.wBottom_1,
    ...borderStyles.bordergray,
    ...Spacing.paddingBottom_20,
  },
  boxtime: {
    ...layout.width_20,
    ...layout.height_20,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  economytext: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  estimatedArrival: {
    ...Fonts.size_14,
    color: Colors.footerColor,
  },
  orderlistheader: {
    ...Fonts.size_18,
    ...Fonts.weight_800,
    ...Spacing.marginTop_20,
    ...Spacing.paddingHorizontal_20,
  },
  orderItem: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.paddingVertical_25,
    ...borderStyles.wBottom_1,
    ...borderStyles.bordergray,
  },
  productImage: {
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    ...borderStyles.rounded_10,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  productTitle: {
    ...Fonts.size_16,
    ...Fonts.weight_800,
  },
  productSize: {
    ...Fonts.size_14,
    color: Colors.mediumgrey,
  },
  productPrice: {
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
  paymentButton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_medsmall,
    ...layout.width_350,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  paymentText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.white,
  },
  homeeconomycontainer: {
    ...Spacing.paddingHorizontal_20,
  },
});
