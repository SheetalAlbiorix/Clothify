import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";
import { Colors } from "../utils/Colors";

export const searchscreenstyle = StyleSheet.create({
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
  searchMainView: {
    ...layout.row,
    ...layout.highHeight,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  searchContainer: {
    ...layout.row,
    backgroundColor: Colors.lightgrey,
    ...borderStyles.rounded_30,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.paddingHorizontal_10,
    ...Spacing.marginBottom_15,
    ...Spacing.padding_10,
    ...layout.height_small,
    ...layout.width_380,
  },
  searchIcon: {
    ...layout.width_20,
    ...layout.height_20,
  } as ImageStyle,
  searchInput: {
    ...layout.flex_1,
    ...Spacing.marginLeft_10,
    ...Fonts.size_16,
  },
  recentContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_10,
  },
  RecentText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
  },
  clearAllButton: {
    ...layout.row,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  clearAllText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    color: Colors.mediumbrown,
  },
  searchname: {
    ...Fonts.size_16,
    ...Fonts.weight_400,
  },
  recentListContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  recentItemContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_10,
    ...Spacing.paddingVertical_10,
    ...borderStyles.rounded_20,
  },
  crossIcon: {
    ...layout.width_20,
    ...layout.height_20,
    ...Spacing.marginLeft_10,
  } as ImageStyle,
  searchResultContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_10,
    ...Spacing.paddingVertical_10,
  },
  searchResultsText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
  },
  foundText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  MainImageStyle: {
    ...layout.width_180,
    ...layout.height_160,
  } as ImageStyle,
  jacketTextContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    height: 20,
    width: 160,
  },
  jacketRatingContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.height_20,
    ...layout.width_small,
  },
  jacketText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  starIcon: {
    ...layout.width_20,
    ...layout.height_20,
    ...Spacing.marginLeft_10,
  } as ImageStyle,
  jacketPrice: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_30,
    ...Spacing.marginLeft_10,
  },
  ratingText: {
    ...Fonts.size_16,
    ...Fonts.weight_500,
  },
  mainFlatListStyle: {
    ...Spacing.paddingHorizontal_20,
  },
  mainResultContainer: {
    ...Spacing.marginBottom_10,
    // ...layout.row,
  },
  jacketContainer: {
    height: 200,
    width: 200,
    ...layout.itemsStart,
    ...layout.justifyBetween,
  },
  jacketImageContainer: {
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  bgheartContainer: {
    ...layout.height_small,
    ...layout.width_small,
    backgroundColor: Colors.transparent,
    ...layout.absolute,
    ...layout.z99,
    ...Spacing.marginTop_10,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_25,
  },
  heartImage: {
    ...layout.height_25,
    ...layout.width_25,
    ...layout.absolute,
    ...layout.z101,
    tintColor: Colors.darkcoffee,
  } as ImageStyle,
  HeartContainer: {
    ...Spacing.marginLeft_60,
  },
});
