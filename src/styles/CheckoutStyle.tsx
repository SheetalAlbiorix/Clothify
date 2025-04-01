import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const checkoutstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
  },
  headerContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...layout.fixed,
    ...Spacing.marginTop_60,
    ...Spacing.marginBottom_20,
    ...layout.z100,
  },
  backButton: {
    ...layout.width_small,
    ...layout.height_small,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_25,
    ...borderStyles.w_1,
    borderColor: Colors.mediumbrown,
    backgroundColor: Colors.white,
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
  shippingheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  homecontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  locationpinImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  hometext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  address: {
    fontSize: 14,
    color: "gray",
  },
  changeButton: {
    marginLeft: "auto",
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  changetext: {
    fontSize: 12,
    fontWeight: 400,
    color: Colors.darkbrown,
  },
  shippingtypeheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  economycontainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  boxtime: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  economytext: {
    fontSize: 16,
    fontWeight: "bold",
  },
  estimatedArrival: {
    fontSize: 14,
    color: "gray",
  },
  orderlistheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
  orderItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productSize: {
    fontSize: 14,
    color: "gray",
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    height: 80,
    width: 400,
    backgroundColor: "#000",
    borderWidth: 1,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
    borderColor: "#fff",
  },
  paymentButton: {
    backgroundColor: "#8B5E3B",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  paymentText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});
