import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const addcardstyles = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  keyboardAvoidView: {
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
  cardPreview: {
    ...layout.height_250,
    ...Spacing.marginHorizontal_20,
    ...Spacing.marginVertical_20,
    ...borderStyles.rounded_10,
    ...Spacing.padding_20,
    backgroundColor: Colors.cardColor,
    ...layout.justifyBetween,
  },
  visaText: {
    color: Colors.white,
    ...Fonts.size_24,
    ...Fonts.weight_900,
    ...textStyles.EndText,
  },
  cardNumberPreview: {
    color: Colors.white,
    ...Fonts.size_24,
    ...Fonts.weight_600,
    ...textStyles.letterspace2,
    ...Spacing.marginVertical_20,
  },
  cardPreviewBottom: {
    ...layout.row,
    ...layout.justifyBetween,
  },
  cardPreviewLabel: {
    color: Colors.cardtransparent,
    ...Fonts.size_12,
  },
  cardPreviewValue: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_500,
  },
  chipIcon: {
    ...layout.width_40,
    ...layout.height_30,
    backgroundColor: Colors.chipIconTransparent,
    ...borderStyles.rounded_4,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  chipLines: {
    ...layout.width_25,
    ...layout.height_15,
    ...borderStyles.w_1,
    ...borderStyles.chipIconBorder,
    ...borderStyles.rounded_2,
  },
  formContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  inputGroup: {
    ...Spacing.marginBottom_20,
  },
  inputLabel: {
    ...Fonts.size_16,
    ...Spacing.marginBottom_8,
    ...Fonts.weight_500,
  },
  input: {
    ...layout.height_55,
    ...borderStyles.w_1,
    ...borderStyles.inputBorder,
    ...borderStyles.rounded_10,
    ...Spacing.paddingHorizontal_15,
    ...Fonts.size_16,
  },
  row: {
    ...layout.row,
    ...layout.justifyBetween,
  },
  halfWidth: {
    ...layout.width48,
  },
  checkboxContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginVertical_15,
  },
  checkbox: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    ...borderStyles.rounded_4,
    ...borderStyles.w_1,
    ...borderStyles.checkboxBorder,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginRight_10,
  },
  checkboxChecked: {
    backgroundColor: Colors.cardColor,
  },
  checkmark: {
    color: Colors.white,
    ...Fonts.size_16,
  },
  checkboxLabel: {
    ...Fonts.size_16,
    ...Fonts.weight_500,
  },
  addCardButton: {
    backgroundColor: Colors.cardColor,
    ...layout.height_55,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...Spacing.marginTop_20,
    ...Spacing.marginBottom_40,
  },
  addCardButtonText: {
    color: Colors.white,
    ...Fonts.size_16,
    ...Fonts.weight_600,
  },
});
