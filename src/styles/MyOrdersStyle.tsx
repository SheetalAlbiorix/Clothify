import { ImageStyle, StyleSheet } from "react-native";
import {
  layout,
  borderStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const myorderstyles = StyleSheet.create({
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
  orderStatusContainer: {
    ...Spacing.marginBottom_20,
    ...Spacing.paddingHorizontal_20,
  },
  orderStatusText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  orderStatus: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.paddingHorizontal_20,
  },
  tabContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_10,
  },
  tab: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...Spacing.paddingVertical_10,
  },
  activeTab: {
    ...borderStyles.wBottom_2,
  },
  tabText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  listContainer: {
    ...Spacing.paddingBottom_20,
  },
  orderItemContainer: {
    ...Spacing.marginBottom_5,
  },
  orderItem: {
    ...layout.row,
    ...Spacing.padding_10,
    ...Spacing.paddingHorizontal_20,
    ...layout.itemsCenter,
  },
  productImage: {
    ...layout.highWidth,
    ...layout.highHeight,
    ...borderStyles.rounded_8,
  } as ImageStyle,
  productDetails: {
    ...layout.flex_1,
    ...Spacing.marginLeft_15,
  },
  productName: {
    ...Fonts.size_16,
    ...Fonts.weight_700,
    ...Spacing.marginBottom_5,
  },
  productSize: {
    ...Fonts.size_14,
    ...Fonts.weight_400,
    ...Spacing.marginBottom_5,
  },
  productPrice: {
    ...Fonts.size_16,
    ...Fonts.weight_700,
  },
  actionButton: {
    ...Spacing.paddingHorizontal_15,
    ...Spacing.paddingVertical_10,
    ...borderStyles.rounded_20,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  buttonText: {
    color: Colors.white,
    ...Fonts.size_14,
    ...Fonts.weight_600,
  },
  divider: {
    ...layout.height_1,
    ...Spacing.marginTop_10,
    ...Spacing.marginHorizontal_20,
  },
});
