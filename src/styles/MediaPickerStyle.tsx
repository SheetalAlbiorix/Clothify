import { StyleSheet } from "react-native";
import { borderStyles, layout, Spacing } from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const mediapcikerstyles = StyleSheet.create({
  modalOverlay: {
    ...layout.flex_1,
    backgroundColor: Colors.transparentblack,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  modalContainer: {
    backgroundColor: Colors.darkChoclate,
    ...layout.mediumWidth,
    ...borderStyles.rounded_20,
    ...Spacing.padding_20,
    ...layout.itemsCenter,
    ...borderStyles.w_1,
    ...borderStyles.bordergray,
  },
  title: {
    color: Colors.white,
    ...Fonts.size_20,
    ...Fonts.weight_700,
    ...Spacing.marginBottom_8,
  },
  subtitle: {
    ...Fonts.size_14,
    color: Colors.mediumBlack,
    ...Spacing.marginBottom_20,
  },
  button: {
    backgroundColor: Colors.white,
    ...Spacing.paddingVertical_12,
    ...Spacing.paddingHorizontal_24,
    ...borderStyles.rounded_10,
    ...Spacing.marginVertical_8,
    ...layout.fullWidth,
    ...layout.itemsCenter,
  },
  buttonText: {
    color: Colors.black,
    ...Fonts.weight_600,
  },
  cancelButton: {
    backgroundColor: Colors.lightred,
  },
  cancelText: {
    color: Colors.darkishred,
  },
});
