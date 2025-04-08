import { ImageStyle, StyleSheet } from "react-native";
import { borderStyles, layout, Spacing, textStyles } from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const leavereviewstyle = StyleSheet.create({
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
});
