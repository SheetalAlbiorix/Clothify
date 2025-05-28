import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const allowlocationstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  locationimageContainer: {
    ...layout.width_150,
    ...layout.height_150,
    ...borderStyles.rounded_100,
    backgroundColor: Colors.mediumgrey,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.margin_30,
  },
  locationIcon: {
    ...layout.width_medsmall,
    ...layout.height_medsmall,
  } as ImageStyle,
  heading: {
    ...Fonts.size_28,
    ...Fonts.weight_900,
  },
  locationinfotext: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.footerColor,
    ...textStyles.centerText,
  },
  accessbutton: {
    ...layout.height_small,
    ...layout.width_350,
    ...Spacing.margin_20,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    backgroundColor: Colors.mediumbrown,
    ...borderStyles.rounded_25,
  },
  accessText: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
    color: Colors.white,
  },
  accessbuttonContainer: {
    ...Spacing.margin_20,
  },
  headinfotext: {
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.margin_10,
    ...Spacing.paddingHorizontal_20,
  },
  manualButtonContainer: {
    ...Spacing.margin_5,
  },
  manualButton: {
    ...layout.height_small,
    ...layout.width_350,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_25,
  },
  manuallocationtext: {
    ...Fonts.size_20,
    ...Fonts.weight_900,
    color: Colors.mediumbrown,
  },
});
