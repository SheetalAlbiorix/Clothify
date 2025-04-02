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

export const paymentstyles = StyleSheet.create({
  container: {
    flex: 1,
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
  paymenttextIconContainer: {
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingVertical_160,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...layout.col,
    ...Spacing.gap_20,
    // transform: [{ scale: scaleAnim }]
  },
  doneIconImage: {
    ...layout.width_200,
    ...layout.height_200,
  } as ImageStyle,
  Paymentsuccess: {
    ...Fonts.size_24,
    ...Fonts.weight_900,
  },
  thankyouText: {
    ...Fonts.size_20,
    ...Fonts.weight_400,
  },
  footer: {
    ...layout.col,
    ...Spacing.gap_10,
    ...layout.height_180,
    ...layout.width_420,
    ...borderStyles.wTop_2,
    ...borderStyles.roundedTopEndRadius_30,
    ...borderStyles.roundedTopStartRadius_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    ...shadowStyles.shadowLarge,
    ...Spacing.paddingBottom_20
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
  ereceiptbutton: {
    backgroundColor: Colors.white,
    ...borderStyles.w_1,
    ...shadowStyles.shadowborder,
    ...layout.height_medsmall,
    ...layout.width_350,
    ...borderStyles.rounded_30,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
  },
  ereceiptText: {
    ...Fonts.size_16,
    ...Fonts.weight_600,
    color: Colors.darkcoffee,
  },
});
