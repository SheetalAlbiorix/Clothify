import { ImageStyle, StyleSheet } from "react-native";
import {
  layout,
  borderStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const myorderstyles = StyleSheet.create({
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
  orderStatusContainer: {
    ...Spacing.marginBottom_20,
    ...Spacing.paddingHorizontal_20,
  },
  orderStatusText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  orderStatus: {
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.paddingHorizontal_20,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
  },
  activeTab: {
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 16,
    fontWeight: "600",
  },
  listContainer: {
    paddingBottom: 20,
  },
  orderItemContainer: {
    marginBottom: 5,
  },
  orderItem: {
    flexDirection: "row",
    padding: 10,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productName: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 5,
  },
  productSize: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "700",
  },
  actionButton: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    marginTop: 10,
    marginHorizontal: 20,
  },
});
