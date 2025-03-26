import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";

export const allowlocationstyle = StyleSheet.create({
    container: {
        ...layout.flex_1,
        ...layout.itemsCenter,
        ...layout.justifyCenter
    },
})