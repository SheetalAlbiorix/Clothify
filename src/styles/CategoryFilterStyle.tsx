import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, Spacing } from "../components/layout";
import { Fonts } from "../components/fonts";

export const categoryfilterstyle = StyleSheet.create({
    container: {
      ...Spacing.marginTop_10,
    },
    button: {
      ...Spacing.paddingVertical_6,
      ...Spacing.paddingHorizontal_15,
      ...borderStyles.rounded_20,
      ...borderStyles.w_1,
      borderColor: Colors.lightgrey,
      ...Spacing.marginRight_10,
      ...Spacing.marginBottom_15
    },
    selectedButton: {
      backgroundColor: Colors.darkcoffee,
      borderColor: Colors.darkcoffee,
    },
    buttonText: {
      ...Fonts.size_14,
      color: Colors.white,
    },
    selectedText: {
      color: Colors.white,
    },
  });