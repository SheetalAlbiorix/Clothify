import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const paymentmethodstyle = StyleSheet.create({
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
  creditdebitheading: {
    ...Fonts.size_18,
    ...Fonts.weight_800,
  },
  mainContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  cardandTextContainer: {
    ...Spacing.gap_10,
    ...layout.row,
    ...layout.itemsCenter,
  },
  cardIconImage: {
    ...layout.width_40,
    ...layout.height_40,
    ...layout.resizeContain,
    tintColor: Colors.darkcoffee,
  } as ImageStyle,
  arrowright: {
    ...layout.width_25,
    ...layout.height_25,
    ...layout.resizeContain,
  } as ImageStyle,
  cardIconButton: {
    ...Spacing.paddingHorizontal_10,
    ...Spacing.marginVertical_20,
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.height_small,
    ...layout.width_380,
    ...borderStyles.w_2,
    ...borderStyles.rounded_10,
  },
  addcardText: {
    ...Fonts.size_18,
    ...Fonts.weight_400,
  },
  AllPaymentOption: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.marginBottom_40,
  },
  moreoptionText: {
    ...Fonts.size_18,
    ...Fonts.weight_800,
    ...Spacing.marginVertical_10,
  },
  paypalIconImage: {
    ...layout.height_35,
    ...layout.width_35,
  } as ImageStyle,
  appleIconImage: {
    height: 20,
    width: 20,
  },
  googleIconImage: {
    height: 30,
    width: 30,
  },
  paypalIconContainer: {
    ...Spacing.gap_10,
    ...layout.row,
    ...layout.itemsCenter,
  },
  paypalText: {
    ...Fonts.size_18,
    ...Fonts.weight_400,
  },
  MainConatinerPaypal: {
    ...Spacing.paddingHorizontal_10,
    ...Spacing.marginVertical_10,
    ...layout.row,
    ...layout.justifyBetween,
    ...layout.itemsCenter,
    ...layout.height_small,
    ...layout.width_380,
    ...borderStyles.w_2,
    ...borderStyles.rounded_10,
  },

  radioButton: {
    height: 25,
    width: 25,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.darkbrown,
  },
  selectedRadioButton: {
    backgroundColor: Colors.brown,
    height: 15,
    width: 15,
    borderRadius: 10,
  },
  footer: {
    ...layout.height_normal,
    ...layout.width_420,
    ...borderStyles.wTop_2,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...shadowStyles.shadowLarge,
  },
  paymentButton: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_medsmall,
    ...layout.width_350,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  paymentText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.white,
  },
  savedCardsContainer: {
    marginBottom: 10,
    ...Spacing.paddingHorizontal_20,
  },
  savedCardContainer: {
    padding: 15,
    ...Spacing.paddingHorizontal_20,
    ...borderStyles.w_1,
    borderRadius: 10,
    marginVertical: 10,
  },
  savedCardText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  savedCardCvv: {
    fontSize: 14,
    color: "#666",
  },
  noCardText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
    marginTop: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 0,
    right: 0,
    padding: 5,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});
