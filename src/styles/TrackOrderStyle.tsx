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

export const trackorderstyle = StyleSheet.create({
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
  text: {
    ...Fonts.size_15,
    ...Fonts.weight_600,
  },
  flexcontainer: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingVertical_10,
  },
  divider: {
    ...Spacing.marginBottom_30,
    ...Spacing.marginTop_30,
    ...layout.height_05,
    backgroundColor: Colors.mediumgrey,
  },
  orderDetailsContainer: {
    ...Spacing.marginBottom_20,
  },
  orderDetailText: {
    ...Fonts.size_20,
    ...Fonts.weight_600,
  },
  deliverycontainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.marginTop_20,
  },
  expectedDateText: {
    ...Fonts.size_14,
    ...Fonts.weight_500,
  },
  deliverdateText: {
    ...Fonts.size_14,
    ...Fonts.weight_800,
  },
  trackingcontainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.marginTop_20,
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
});
