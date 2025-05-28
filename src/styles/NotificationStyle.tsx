import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";
import { Colors } from "../utils/Colors";

export const notificationstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  headerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...Spacing.paddingRight_30,
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
  new2Text: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    color: Colors.white,
  },
  new2container: {
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    backgroundColor: Colors.darkcoffee,
    ...layout.height_40,
    ...layout.highWidth,
    ...borderStyles.rounded_20,
  },
  daymarkreadContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.paddingHorizontal_30,
    ...Spacing.paddingVertical_10,
  },
  dayText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  markasreadText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  shippingtruckIcon: {
    ...layout.width_40,
    ...layout.height_40,
    tintColor: Colors.darkcoffee,
  } as ImageStyle,
  imagecontainer: {
    backgroundColor: Colors.lightgrey,
    ...borderStyles.rounded_35,
    ...layout.highHeight,
    ...layout.highWidth,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  notificationcontainer: {
    ...Spacing.paddingHorizontal_10,
  },

  messageContainer: {
    ...layout.row,
    ...layout.itemsStart,
    ...Spacing.gap_15,
  },

  messageTextContainer: {
    ...layout.flex_1,
    ...layout.col,
  },

  shippedTimeText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.marginBottom_5,
  },
  notificationItem: {
    ...borderStyles.rounded_12,
    ...Spacing.padding_15,
    ...Spacing.marginVertical_8,
  },
  ordershippedText: {
    ...Fonts.weight_600,
    ...Fonts.size_16,
  },
  timeText: {
    ...Fonts.size_14,
    ...Fonts.weight_600,
    color: Colors.zetgrey,
  },
  yourorderpara: {
    ...Fonts.size_14,
  },
  notification2container: {
    ...Spacing.paddingHorizontal_10,
  },

  message2Container: {
    ...layout.row,
    ...layout.itemsStart,
    ...Spacing.gap_15,
  },

  messageText2Container: {
    ...layout.flex_1,
    ...layout.col,
  },

  shippedTime2Text: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.marginBottom_5,
  },
  notification2Item: {
    ...borderStyles.rounded_12,
    ...Spacing.padding_15,
    ...Spacing.marginVertical_8,
  },
  ordershipped2Text: {
    ...Fonts.weight_600,
    ...Fonts.size_16,
  },
  timeText2: {
    ...Fonts.size_14,
    color: Colors.zetgrey,
  },
  yourorderpara2: {
    ...Fonts.size_16,
  },
  shippingtruckIcon2: {
    ...layout.width_40,
    ...layout.height_40,
    tintColor: Colors.darkcoffee,
  } as ImageStyle,
  imagecontainer2: {
    backgroundColor: Colors.white,
    ...borderStyles.rounded_35,
    ...layout.highHeight,
    ...layout.highWidth,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  walletIcon: {
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    tintColor: Colors.darkcoffee,
  },
  cartIcon: {
    ...layout.width_small,
    ...layout.height_small,
    tintColor: Colors.darkcoffee,
  },
});
