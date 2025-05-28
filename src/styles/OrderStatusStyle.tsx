import { StyleSheet } from "react-native";
import { Fonts } from "../components/fonts";
import { borderStyles, layout, Spacing } from "../components/layout";
import { Colors } from "../utils/Colors";

export const orderstatusstyle = StyleSheet.create({
  container: {
    ...Spacing.marginTop_16,
  },
  headerText: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_16,
  },
  statusItem: {
    ...layout.row,
    ...Spacing.marginBottom_24,
  },
  statusIndicatorContainer: {
    ...layout.itemsCenter,
    ...Spacing.marginRight_15,
  },
  statusIndicator: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    ...borderStyles.rounded_12,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...layout.z1,
  },
  completedIndicator: {
    backgroundColor: Colors.brown,
  },
  pendingIndicator: {
    backgroundColor: Colors.mediumgrey,
  },
  statusLine: {
    ...layout.absolute,
    ...layout.top24,
    ...layout.width_3,
    ...layout.fullHeight,
    ...Spacing.marginLeft_11,
  },
  completedLine: {
    backgroundColor: Colors.brown,
  },
  pendingLine: {
    backgroundColor: Colors.mediumgrey,
  },
  statusDetails: {
    ...layout.flex_1,
    ...layout.justifyCenter,
  },
  statusTitle: {
    ...Fonts.size_16,
    ...Fonts.weight_500,
    ...Spacing.marginBottom_4,
  },
  completedText: {
    color: Colors.MildBlack,
  },
  pendingText: {
    color: Colors.footerColor,
  },
  statusDate: {
    ...Fonts.size_13,
    color: Colors.footerColor,
  },
  iconContainer: {
    ...layout.justifyCenter,
    ...Spacing.marginLeft_10,
  },
  orderstatusContainer: {
    ...Spacing.marginVertical_10,
  },
});
