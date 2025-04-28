import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const helpcenterstyle = StyleSheet.create({
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
  searchContainer: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_15,
  },
  searchview: {
    ...layout.row,
    ...layout.itemsCenter,
    backgroundColor: Colors.lightgrey,
    ...borderStyles.rounded_8,
    ...Spacing.paddingHorizontal_15,
    ...layout.height_45,
  },
  searchIcon: {
    ...layout.width_20,
    ...layout.height_20,
    tintColor: Colors.mediumgrey,
    ...Spacing.marginRight_10,
  } as ImageStyle,
  input: {
    ...layout.flex_1,
    ...layout.height_small,
    color: Colors.black,
    ...Fonts.size_16,
  },
  tabContainer: {
    ...layout.row,
    ...borderStyles.wBottom_1,
    borderBottomColor: Colors.lightgrey,
  },
  tabButton: {
    ...layout.flex_1,
    ...Spacing.paddingVertical_15,
    ...layout.itemsCenter,
  },
  activeTabButton: {
    ...borderStyles.wBottom_3,
    borderBottomColor: Colors.brown,
  },
  tabText: {
    ...Fonts.size_16,
    ...Fonts.weight_500,
    color: Colors.mediumgrey,
  },
  activeTabText: {
    color: Colors.brown,
    ...Fonts.weight_600,
  },
  faqContainer: {
    ...layout.flex_1,
  },
  categoriesContainer: {
    ...layout.row,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.paddingTop_15,
  },
  categoryButton: {
    ...layout.height_30,
    ...layout.width_80,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_20,
    ...Spacing.marginHorizontal_5,
    backgroundColor: Colors.lightgrey,
  },
  activeCategoryButton: {
    backgroundColor: Colors.brown,
  },
  categoryText: {
    ...Fonts.size_14,
    color: Colors.darkgray,
  },
  activeCategoryText: {
    color: Colors.white,
    ...Fonts.weight_500,
  },
  faqList: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingBottom_20,
  },
  faqItem: {
    ...borderStyles.rounded_8,
    backgroundColor: Colors.white,
    ...Spacing.marginBottom_10,
    ...Spacing.padding_16,
    ...borderStyles.w_1,
    borderColor: Colors.lightgrey,
  },
  faqQuestion: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
  },
  questionText: {
    ...Fonts.size_16,
    ...Fonts.weight_500,
    color: Colors.black,
    ...layout.flex_1,
  },
  answerText: {
    ...Spacing.marginTop_10,
    ...Fonts.size_14,
    color: Colors.darkgray,
    ...textStyles.lineheight20,
  },
  arrowIcon: {
    ...layout.width_15,
    ...layout.height_15,
    tintColor: Colors.brown,
  } as ImageStyle,
  contactContainer: {
    ...layout.flex_1,
  },
  contactList: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingVertical_15,
  },
  contactItem: {
    ...borderStyles.rounded_8,
    backgroundColor: Colors.white,
    ...Spacing.marginBottom_10,
    ...Spacing.padding_15,
    ...borderStyles.w_1,
    borderColor: Colors.lightgrey,
  },
  contactHeader: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
  },
  contactIcon: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    tintColor: Colors.brown,
    ...Spacing.marginRight_15,
  } as ImageStyle,
  contactTitle: {
    ...Fonts.size_16,
    ...Fonts.weight_500,
    color: Colors.black,
    ...layout.flex_1,
  },
  contactDetail: {
    ...Spacing.marginTop_15,
    ...Spacing.paddingTop_15,
    ...borderStyles.wTop_1,
    borderTopColor: Colors.lightgrey,
  },
  contactPhoneContainer: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  contactBullet: {
    ...layout.width_8,
    ...layout.height_8,
    ...borderStyles.rounded_4,
    backgroundColor: Colors.brown,
    ...Spacing.marginRight_8,
  },
  contactPhone: {
    ...Fonts.size_14,
    color: Colors.darkgray,
  },
});
