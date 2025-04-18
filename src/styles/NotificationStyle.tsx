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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 600,
  },
  markasreadText: {
    fontSize: 16,
    fontWeight: 600,
  },
  shippingtruckIcon: {
    width: 40,
    height: 40,
    tintColor: Colors.darkcoffee
  },
  imagecontainer: {
    backgroundColor: Colors.lightgrey,
    borderRadius: 35,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  notificationcontainer: {
    paddingHorizontal: 10,
  },

  messageContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },

  messageTextContainer: {
    flex: 1,
    flexDirection: "column",
  },

  shippedTimeText: {
    fontSize: 16,
    fontWeight: "600",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  notificationItem: {
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
  },
  ordershippedText: {
    fontWeight: "600",
    fontSize: 16,
  },
  timeText: {
    fontSize: 14,
    fontWeight: 600,
    color: Colors.zetgrey
  },
  yourorderpara: {
    fontSize: 14,
  },
  notification2container: {
    paddingHorizontal: 10,
  },

  message2Container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 15,
  },

  messageText2Container: {
    flex: 1,
    flexDirection: "column",
  },

  shippedTime2Text: {
    fontSize: 16,
    fontWeight: "600",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  notification2Item: {
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
  },
  ordershipped2Text: {
    fontWeight: "600",
    fontSize: 16,
  },
  timeText2: {
    fontSize: 14,
    color: Colors.zetgrey
  },
  yourorderpara2: {
    fontSize: 14,
  },
  shippingtruckIcon2: {
    width: 40,
    height: 40,
    tintColor: Colors.darkcoffee
  },
  imagecontainer2: {
    backgroundColor: Colors.white,
    borderRadius: 35,
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  walletIcon: {
    width: 60,
    height: 60,
    tintColor: Colors.darkcoffee
  },
  cartIcon: {
    width: 50,
    height: 50,
    tintColor: Colors.darkcoffee
  },
});
