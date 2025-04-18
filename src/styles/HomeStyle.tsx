import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const homeStyles = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.paddingBottom_100,
  },
  locationheader: {
    color: Colors.lightgrey,
    ...Spacing.marginTop_60,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  header: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
    ...Spacing.marginTop_10,
  },
  locationContainer: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  locationIcon: {
    ...layout.width_18,
    ...layout.height_18,
    ...Spacing.marginRight_5,
  } as ImageStyle,
  locationText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  notificationButton: {
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    backgroundColor: Colors.footerColor,
    ...layout.width_40,
    ...layout.height_40,
    ...borderStyles.rounded_20,
  },
  notificationIcon: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
  } as ImageStyle,
  downarrowIcon: {
    ...layout.width_18,
    ...layout.height_18,
    ...Spacing.marginLeft_5,
  } as ImageStyle,
  searchfilterContainer: {
    ...layout.row,
    ...layout.highHeight,
    ...layout.justifyBetween,
  },
  searchContainer: {
    ...layout.row,
    backgroundColor: Colors.lightgrey,
    ...borderStyles.rounded_30,
    ...layout.itemsCenter,
    ...Spacing.paddingHorizontal_10,
    ...Spacing.marginBottom_15,
    ...Spacing.padding_10,
    ...layout.height_small,
    ...layout.width_320,
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
  filterIcon: {
    ...layout.widthinsmall,
    ...layout.height_55,
  } as ImageStyle,
  sectionSeeAllcontainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  sectionTitle: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
    ...Spacing.marginVertical_10,
  },
  seeAllText: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
  },
  flashSaleHeader: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  flashSaleItem: {
    ...layout.width_190,
    ...Spacing.marginRight_10,
    ...Spacing.marginBottom_10,
    ...layout.col,
  },
  flashSaleImage: {
    ...layout.fullWidth,
    ...layout.height_140,
    ...borderStyles.rounded_10,
    ...layout.z1,
  } as ImageStyle,
  flashSaleTitle: {
    ...Fonts.size_14,
    ...Fonts.weight_900,
  },
  flashSalePrice: {
    ...Fonts.size_14,
    color: Colors.darkbrown,
  },
  categoryItem: {
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...layout.width_90,
    ...layout.height_normal,
    ...borderStyles.rounded_50,
    backgroundColor: Colors.lightgrey,
    ...Spacing.marginRight_10,
    ...Spacing.marginBottom_10,
    ...Spacing.marginTop_5,
    ...Spacing.marginBottom_25,
  },
  categoryIcon: {
    ...layout.width_40,
    ...layout.height_40,
    ...layout.resizeContain,
  } as ImageStyle,
  categoryText: {
    ...Spacing.marginTop_5,
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.darkgray,
  },
  timerText: {
    ...Fonts.size_14,
    ...Fonts.weight_900,
    color: Colors.red,
  },
  ratingContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginTop_5,
  },
  starIcon: {
    ...layout.width_16,
    ...layout.height_16,
    ...Spacing.marginRight_5,
  } as ImageStyle,
  ratingText: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.darkgray,
  },
  bannerTitleContainer: {
    ...layout.width_120,
    ...layout.marginRight_5,
  },
  bannerContainer: {
    backgroundColor: Colors.mediumbrown,
    ...Spacing.padding_45,
    ...borderStyles.rounded_10,
    ...Spacing.marginBottom_15,
  },
  bannerTitle: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
  },
  bannerSubtitle: {
    ...Fonts.size_14,
    color: Colors.darkgray,
    ...Spacing.marginBottom_10,
  },
  shopNowButton: {
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    backgroundColor: Colors.brown,
    ...layout.width_80,
    ...layout.height_40,
    ...borderStyles.rounded_5,
    ...shadowStyles.shadowLarge,
  },
  shopNowText: {
    color: Colors.white,
  },
  ImageBanner: {
    ...layout.width_395,
    ...layout.height_200,
    ...layout.absolute,
    ...borderStyles.rounded_10,
  } as ImageStyle,
  namestarconatiner: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.width_180,
  },
  bgheartContainer: {
    ...layout.height_small,
    ...layout.width_small,
    backgroundColor: Colors.transparent,
    ...layout.absolute,
    ...layout.z99,
    ...Spacing.marginLeft_145,
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
  scrollview: {
    ...layout.row,
    ...Spacing.gap_200,
    ...layout.width_1000,
  },
 
  notificationBubble: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 50,
    width: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationBubbleText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
