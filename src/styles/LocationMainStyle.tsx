import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const locationmainstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.padding_20,
  },
  maincontainer: {
    ...layout.row,
    ...layout.justifyEvenly,
    ...layout.itemsCenter,
    ...layout.right60,
    ...layout.top30,
  },
  backButton: {
    ...layout.width_40,
    ...layout.height_40,
    ...borderStyles.rounded_20,
    ...borderStyles.w_1,
    borderColor: Colors.mediumbrown,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  backIcon: {
    ...layout.width_20,
    ...layout.height_20,
  } as ImageStyle,
  title: {
    ...Fonts.size_20,
    ...Fonts.weight_900,
    ...Spacing.marginTop_10,
  },
  searchContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...borderStyles.w_1,
    borderColor: Colors.mediumgrey,
    backgroundColor: Colors.white,
    ...borderStyles.rounded_25,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.marginTop_60,
  },
  searchIcon: {
    ...layout.width_20,
    ...layout.height_20,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  searchInput: {
    ...layout.flex_1,
    ...Fonts.size_16,
    ...Spacing.paddingVertical_10,
  },
  closeIcon: {
    ...layout.width_20,
    ...layout.height_20,
  } as ImageStyle,
  currentLocationContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginVertical_10,
  },
  locationIcon: {
    ...layout.width_20,
    ...layout.height_20,
    tintColor: Colors.darkcoffee,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  currentLocationText: {
    ...Fonts.Size_16,
    ...Fonts.weight_900,
    color: Colors.black,
  },
  searchResultTitle: {
    ...Fonts.size_12,
    ...Fonts.weight_900,
    color: Colors.zetgrey,
    ...Spacing.marginTop_20,
  },
  searchResultItem: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginTop_10,
  },
  resultIcon: {
    ...layout.width_20,
    ...layout.height_20,
    tintColor: Colors.darkcoffee,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  resultTitle: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
    color: Colors.black,
  },
  resultSubtitle: {
    ...Fonts.size_14,
    color: Colors.footerColor,
  },
  noResultsText: {
    color: Colors.mediumbrown,
  },
  noResultsContainer: {
    ...layout.itemsCenter,
    ...Spacing.paddingTop_280,
  },
});
