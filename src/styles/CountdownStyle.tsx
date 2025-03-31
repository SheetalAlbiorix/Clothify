import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, Spacing } from "../components/layout";
import { Fonts } from "../components/fonts";

export const countdownstyle = StyleSheet.create({
  container: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  label: {
    ...Fonts.size_14,
    color: Colors.darkgray,
    ...Spacing.marginRight_5,
  },
  timerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  timeBox: {
    backgroundColor: Colors.lightgrey,
    ...Spacing.paddingVertical_5,
    ...Spacing.paddingHorizontal_10,
    ...borderStyles.rounded_5,
  },
  timeText: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
    color: Colors.darkbrown,
  },
  separator: {
    ...Fonts.size_16,
    ...Fonts.weight_900,
    color: Colors.darkgray,
    ...Spacing.marginHorizontal_3,
  },
});
