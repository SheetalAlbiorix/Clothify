import { ImageStyle, StyleSheet } from "react-native";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";
import { Colors } from "../utils/Colors";

export const privacystyle = StyleSheet.create({
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
  CancellationContainer: {
    ...Spacing.paddingHorizontal_20,
  },
  cancellationPara: {
    ...Spacing.paddingTop_20
  },
  cancellationtext: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10
  },
  headingCancellation: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
    color: Colors.darkbrown
  },
  termsConditionContainer: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingVertical_20
  },
  termsConditionPara: {
    ...Spacing.paddingTop_20
  },
  termsConditiontext: {
    ...Fonts.size_18,
    ...Fonts.weight_600,
    ...Spacing.marginBottom_10
  },
  headingtermsCondition: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
    color: Colors.darkbrown
  }
});
