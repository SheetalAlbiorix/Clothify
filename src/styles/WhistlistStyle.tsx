import { ImageStyle, StyleSheet } from "react-native";
import { Fonts } from "../components/fonts";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
} from "../components/layout";

export const whistliststyle = StyleSheet.create({
  container: {
    flex: 1,
    ...Spacing.paddingHorizontal_20,
  },
  headerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.gap_80,
    ...layout.fixed,
    ...Spacing.marginTop_60,
    ...layout.z100,
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
  headerText: {
    ...Fonts.size_20,
    ...Fonts.weight_600,
    ...Spacing.marginLeft_10,
  },
  listContent: {
    ...Spacing.paddingBottom_100,
  },
  itemContainer: {
    ...layout.flex_1,
    ...Spacing.margin_5,
    backgroundColor: Colors.white,
    ...borderStyles.rounded_12,
    ...Spacing.paddingBottom_10,
    ...layout.relative,
    borderColor: Colors.mediumgrey,
    ...shadowStyles.shadowLarge,
    ...borderStyles.w_1,
  },
  itemImage: {
    ...layout.fullWidth,
    ...layout.height_160,
    ...borderStyles.roundedTop_12,
    ...layout.resizeCover,
  } as ImageStyle,
  heartButton: {
    ...layout.absolute,
    ...layout.top10,
    ...layout.right10,
    backgroundColor: Colors.transparent,
    ...Spacing.padding_5,
    ...borderStyles.rounded_20,
  },
  heartIcon: {
    ...layout.width_20,
    ...layout.height_20,
    tintColor: Colors.silkygrey,
  }as ImageStyle,
  ratingnamecontainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.marginTop_5,
    ...Spacing.marginHorizontal_10,
  },
  itemTitle: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.darkgray,
  },
  ratingContainer: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  starIcon: {
    ...layout.width_14,
    ...layout.height_14,
    tintColor: Colors.chormeyellow,
  }as ImageStyle,
  ratingText: {
    ...Fonts.size_12,
    ...Fonts.weight_600,
    ...Spacing.marginLeft_3,
  },
  itemPrice: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.black,
    ...Spacing.marginTop_3,
    ...Spacing.marginHorizontal_10,
  },
});
