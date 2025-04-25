import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";
import { Colors } from "../utils/Colors";

export const profilestyle = StyleSheet.create({
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
  profileImageContainer: {
    ...layout.itemsCenter,
    ...Spacing.paddingBottom_5,
  },
  profileImage: {
    ...layout.height_180,
    ...layout.width_180,
    ...borderStyles.rounded_100,
  } as ImageStyle,
  nameText: {
    ...Fonts.size_20,
    ...Fonts.weight_800,
  },
  MainImageContainer: {
    ...Spacing.paddingHorizontal_20,
    ...layout.itemsCenter,
    ...layout.col,
  },
  MainListContainer: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingBottom_140,
  },
  profileIconImage: {
    ...layout.width_30,
    ...layout.height_30,
  } as ImageStyle,
  profileText: {
    ...Fonts.size_22,
    ...Fonts.weight_400,
  },
  profileholder: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.marginTop_20,
    ...layout.height_medsmall,
    ...layout.width_380,
    ...Spacing.paddingHorizontal_10,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.mediumgrey,
  },
  profilefirstView: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.gap_10,
  },
  editIcon: {
    ...layout.absolute,
    ...layout.bottom5,
    ...layout.right45,
    backgroundColor: Colors.white,
    ...layout.width_30,
    ...layout.height_30,
    ...borderStyles.rounded_15,
    ...layout.padding_5,
  } as ImageStyle,
});
