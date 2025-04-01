import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, Spacing, textStyles } from "../components/layout";
import { Fonts } from "../components/fonts";

export const cartitemstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingBottom_80
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
backButtonText: {
  fontSize: 22,
  color: "#333",
},
// header: {
//   fontSize: 18,
//   fontWeight: "bold",
//   marginLeft: 15,
//   color: "#333",
// },
emptyCartContainer: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
emptyCartText: {
  fontSize: 18,
  fontWeight: "bold",
  color: "#333",
},
cartItem: {
  flexDirection: "row",
  padding: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#f0f0f0",
  alignItems: "center",
},
itemImage: {
  width: 80,
  height: 80,
  borderRadius: 8,
},
itemDetails: {
  flex: 1,
  marginLeft: 15,
},
itemName: {
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
  marginBottom: 5,
},
itemSize: {
  fontSize: 14,
  color: "#666",
  marginBottom: 5,
},
itemPrice: {
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
},
originalPrice: {
  textDecorationLine: "line-through",
  color: "#999",
  fontSize: 14,
},
quantityControls: {
  flexDirection: "row",
  alignItems: "center",
  marginRight: 10,
},
quantityButton: {
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: "#f5f5f5",
  justifyContent: "center",
  alignItems: "center",
},
quantityButtonText: {
  fontSize: 16,
  color: "#333",
},
quantityText: {
  fontSize: 16,
  marginHorizontal: 10,
  color: "#333",
},
deleteButton: {
  padding: 8,
},
deleteButtonText: {
  fontSize: 18,
},
promoContainer: {
  marginVertical: 20,
  paddingHorizontal: 15,
},
promoInputContainer: {
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "#e0e0e0",
  borderRadius: 25,
  overflow: "hidden",
},
promoInput: {
  flex: 1,
  height: 50,
  paddingHorizontal: 20,
  fontSize: 16,
  color: "#333",
},
applyButton: {
  backgroundColor: "#8B5A2B",
  paddingHorizontal: 20,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 25,
},
applyButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
},
appliedPromoContainer: {
  flexDirection: "row",
  borderWidth: 1,
  borderColor: "#8B5A2B",
  borderRadius: 25,
  paddingVertical: 15,
  paddingHorizontal: 20,
  alignItems: "center",
  justifyContent: "space-between",
},
appliedPromoText: {
  fontSize: 16,
  color: "#8B5A2B",
  fontWeight: "600",
},
removePromoButton: {
  padding: 5,
},
removePromoButtonText: {
  fontSize: 18,
  color: "#8B5A2B",
},
summary: {
  paddingHorizontal: 15,
  marginBottom: 20,
},
summaryRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 15,
},
summaryLabel: {
  fontSize: 16,
  // color: Colors.white,
},
summaryValue: {
  fontSize: 16,
  fontWeight: "600",
  // color: Colors.white,
},
totalRow: {
  borderTopWidth: 1,
  borderTopColor: "#e0e0e0",
  paddingTop: 15,
  marginTop: 5,
},
totalLabel: {
  fontSize: 18,
  fontWeight: "600",
  // color: Colors.white,
},
totalValue: {
  fontSize: 18,
  fontWeight: "bold",
  // color: Colors.white,
},
checkoutButton: {
  backgroundColor: "#8B5A2B",
  marginHorizontal: 15,
  marginBottom: 30,
  paddingVertical: 15,
  borderRadius: 25,
  alignItems: "center",
},
checkoutButtonText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "600",
},
modalOverlay: {
  flex: 1,
  backgroundColor: "rgba(0,0,0,0.5)",
  justifyContent: "flex-end",
},
modalContent: {
  // backgroundColor: "#fff",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  padding: 20,
},
modalTitle: {
  fontSize: 18,
  fontWeight: "bold",
  marginBottom: 20,
  textAlign: "center",
  // color: "#333",
},
modalItem: {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#f0f0f0",
},
modalItemImage: {
  width: 70,
  height: 70,
  borderRadius: 8,
},
modalItemDetails: {
  flex: 1,
  marginLeft: 15,
},
modalItemName: {
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
  marginBottom: 5,
},
modalItemSize: {
  fontSize: 14,
  color: "#666",
  marginBottom: 5,
},
modalItemPrice: {
  fontSize: 16,
  fontWeight: "600",
  color: "#333",
},
modalQuantity: {
  flexDirection: "row",
  alignItems: "center",
},
modalActions: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 30,
},
cancelButton: {
  flex: 1,
  paddingVertical: 15,
  marginRight: 10,
  borderRadius: 25,
  alignItems: "center",
  borderWidth: 1,
  borderColor: "#e0e0e0",
},
cancelButtonText: {
  color: "#8B5A2B",
  fontSize: 16,
  fontWeight: "600",
},
confirmButton: {
  flex: 1,
  backgroundColor: "#8B5A2B",
  paddingVertical: 15,
  marginLeft: 10,
  borderRadius: 25,
  alignItems: "center",
},
confirmButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
}
});

