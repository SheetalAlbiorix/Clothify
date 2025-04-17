import { ImageStyle, StyleSheet } from "react-native";
import { Fonts } from "../components/fonts";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";

export const invitestyle = StyleSheet.create({
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
  profileIcon: {
    ...layout.height_medsmall,
    ...layout.width_medsmall,
  } as ImageStyle,
  inviteContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...Spacing.paddingVertical_10,
  },
  invitebutton: {
    ...layout.highWidth,
    ...layout.height_40,
    backgroundColor: Colors.brown,
    ...borderStyles.rounded_20,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  inviteText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.white,
  },
  mainInvite: {
    ...layout.row,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.gap_15,
  },
  namenumber: {
    ...layout.col,
  },
  profilenameText: {
    ...Fonts.size_20,
    ...Fonts.weight_600,
    color: Colors.white,
  },
  profilenumberText: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.mediumgrey,
  },
  divider: {
    ...Spacing.marginBottom_10,
    ...Spacing.marginTop_10,
    ...layout.height_05,
    backgroundColor: Colors.mediumgrey,
  },
  listholder: {
    ...Spacing.paddingHorizontal_25,
  },
});
