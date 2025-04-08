import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const cartitemstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingBottom_80,
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
    ...Fonts.size_22,
    color: Colors.MildBlack,
  },
  emptyCartContainer: {
    ...layout.flex_1,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  emptyCartText: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
    color: Colors.MildBlack,
  },
  cartItem: {
    ...layout.row,
    ...Spacing.padding_15,
    ...borderStyles.wBottom_1,
    ...borderStyles.cartItemBottomBorder,
    ...layout.itemsCenter,
  },
  itemImage: {
    ...layout.width_80,
    ...layout.height_80,
    ...borderStyles.rounded_8,
  } as ImageStyle,
  itemDetails: {
    ...layout.flex_1,
    ...Spacing.marginLeft_15,
  },
  itemName: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.MildBlack,
    ...Spacing.marginBottom_5,
  },
  itemSize: {
    ...Fonts.size_14,
    color: Colors.mediumBlack,
    ...Spacing.marginBottom_5,
  },
  itemPrice: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.MildBlack,
  },
  originalPrice: {
    ...textStyles.textLineThrough,
    color: Colors.zetgrey,
    ...Fonts.size_14,
  },
  quantityControls: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginRight_10,
  },
  quantityButton: {
    ...layout.width_30,
    ...layout.height_30,
    ...borderStyles.rounded_15,
    backgroundColor: Colors.lightWhite,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  quantityButtonText: {
    ...Fonts.size_16,
    color: Colors.MildBlack,
  },
  quantityText: {
    ...Fonts.size_16,
    color: Colors.MildBlack,
    ...Spacing.marginHorizontal_10,
  },
  deleteButton: {
    ...Spacing.padding_8,
  },
  deleteButtonText: {
    ...Fonts.size_18,
  },
  promoContainer: {
    ...Spacing.marginVertical_20,
    ...Spacing.paddingHorizontal_15,
  },
  promoInputContainer: {
    ...layout.row,
    ...borderStyles.w_1,
    ...borderStyles.promoinputBorder,
    ...borderStyles.rounded_25,
    ...layout.overflowHidden,
  },
  promoInput: {
    ...layout.flex_1,
    ...layout.height_small,
    ...Spacing.paddingHorizontal_20,
    ...Fonts.size_16,
    color: Colors.MildBlack,
  },
  applyButton: {
    backgroundColor: Colors.applypromoColor,
    ...Spacing.paddingHorizontal_20,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...borderStyles.rounded_25,
  },
  applyButtonText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  appliedPromoContainer: {
    ...layout.row,
    ...borderStyles.w_1,
    ...borderStyles.applypromoBorder,
    ...borderStyles.rounded_25,
    ...Spacing.paddingVertical_15,
    ...Spacing.paddingHorizontal_20,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
  },
  appliedPromoText: {
    ...Fonts.size_16,
    color: Colors.applypromoColor,
    ...Fonts.weight_600,
  },
  removePromoButton: {
    ...Spacing.padding_5,
  },
  removePromoButtonText: {
    ...Fonts.size_18,
    color: Colors.applypromoColor,
  },
  summary: {
    ...Spacing.paddingHorizontal_15,
    ...Spacing.marginBottom_20,
  },
  summaryRow: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.marginBottom_15,
  },
  summaryLabel: {
    ...Fonts.size_16,
  },
  summaryValue: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  totalRow: {
    ...borderStyles.wTop_1,
    ...borderStyles.totalrowTopBorder,
    ...Spacing.paddingTop_15,
    ...Spacing.marginTop_5,
  },
  totalLabel: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
  },
  totalValue: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
  },
  checkoutButton: {
    backgroundColor: Colors.applypromoColor,
    ...Spacing.marginHorizontal_15,
    ...Spacing.marginBottom_30,
    ...Spacing.paddingVertical_15,
    ...borderStyles.rounded_25,
    ...layout.itemsCenter,
  },
  checkoutButtonText: {
    color: Colors.white,
    ...Fonts.size_18,
    ...Fonts.weight_600,
  },
  modalOverlay: {
    ...layout.flex_1,
    backgroundColor: Colors.transparentblack,
    ...layout.justifyEnd,
  },
  modalContent: {
    ...borderStyles.roundedTop_20,
    ...Spacing.padding_20,
  },
  modalTitle: {
    ...Fonts.size_18,
    ...Fonts.weight_900,
    ...Spacing.marginBottom_20,
    ...textStyles.centerText,
  },
  modalItem: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.paddingVertical_15,
    ...borderStyles.wBottom_1,
    ...borderStyles.cartItemBottomBorder,
  },
  modalItemImage: {
    ...layout.highWidth,
    ...layout.highHeight,
    ...borderStyles.rounded_8,
  } as ImageStyle,
  modalItemDetails: {
    ...layout.flex_1,
    ...Spacing.marginLeft_15,
  },
  modalItemName: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.MildBlack,
    ...Spacing.marginBottom_5,
  },
  modalItemSize: {
    ...Fonts.size_14,
    color: Colors.mediumBlack,
    ...Spacing.marginBottom_5,
  },
  modalItemPrice: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.MildBlack,
  },
  modalQuantity: {
    ...layout.row,
    ...layout.itemsCenter,
  },
  modalActions: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.marginTop_30,
  },
  cancelButton: {
    ...layout.flex_1,
    ...Spacing.paddingVertical_15,
    ...Spacing.marginRight_10,
    ...borderStyles.rounded_25,
    ...layout.itemsCenter,
    ...borderStyles.w_1,
    ...borderStyles.promoinputBorder,
  },
  cancelButtonText: {
    color: Colors.applypromoColor,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  confirmButton: {
    ...layout.flex_1,
    backgroundColor: Colors.applypromoColor,
    ...Spacing.paddingVertical_15,
    ...Spacing.marginLeft_10,
    ...borderStyles.rounded_25,
    ...layout.itemsCenter,
  },
  confirmButtonText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
  couponselectContainer: {
    ...layout.col,
    ...Spacing.gap_10,
    ...Spacing.paddingHorizontal_20,
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
  },
  couponButton: {
    ...layout.width_120,
    ...layout.height_30,
    backgroundColor: Colors.darkcoffee,
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...Spacing.paddingHorizontal_10,
    ...borderStyles.rounded_20,
  },
  couponvalidorpromo: {
    ...Fonts.size_12,
    ...Fonts.weight_600,
  },
  seeallcouponText: {
    color: Colors.white,
    ...Fonts.size_12,
  },
  arrowrightImage: {
    ...layout.width_10,
    ...layout.height_10,
  } as ImageStyle,
  pasteButton: {
    ...Spacing.padding_10,
    backgroundColor: Colors.mediumgrey,
    ...borderStyles.rounded_5,
    ...layout.itemsCenter,
  },
  pasteButtonText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_900,
  },
});
