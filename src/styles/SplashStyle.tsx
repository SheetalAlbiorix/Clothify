import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, Spacing } from "../components/layout";
import { Fonts } from "../components/fonts";

export const SplashStyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    backgroundColor: Colors.white,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  splashTextContainer: {
    ...layout.row,
    ...Spacing.gap_10,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    backgroundColor: Colors.transparentbrown,
    ...layout.height_normal,
    ...layout.width_normal,
    ...borderStyles.rounded_100,
  },
  text: {
    color: Colors.black,
    ...Fonts.size_30,
    ...Fonts.weight_900,
  },
  UpperCircle: {
    ...layout.height_150,
    ...layout.width_150,
    ...layout.itemsEnd,
    ...Spacing.marginBottom_280,
    ...Spacing.marginLeft_320,
    ...borderStyles.w_5,
    ...borderStyles.rounded_100,
    borderColor: Colors.brown,
  },
  LowerCircle: {
    ...layout.height_150,
    ...layout.width_150,
    ...layout.itemsEnd,
    ...Spacing.marginTop_300,
    ...Spacing.marginRight_320,
    ...borderStyles.w_5,
    ...borderStyles.rounded_100,
    borderColor: Colors.brown,
  },
  circle: {
    backgroundColor: Colors.darkbrown,
    ...layout.height_small,
    ...layout.width_small,
    ...borderStyles.rounded_25,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  textF: {
    color: Colors.white,
    ...Fonts.size_30,
    ...Fonts.weight_600,
  },
});
