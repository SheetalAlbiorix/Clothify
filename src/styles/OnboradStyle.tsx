import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  borderStyles,
  layout,
  Spacing,
  textStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const Onboardstyles = StyleSheet.create({
  container: {
    ...layout.flex_1,
  },
  slide: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.padding_15,
  },
  image: {
    ...layout.mediumWidth,
    ...layout.AverageHeight,
    ...layout.resizeContain
  } as ImageStyle,
  text: {
    ...Fonts.size_20,
    ...Fonts.weight_900,
    ...textStyles.centerText,
    ...Spacing.marginTop_20,
  },
  text2: {
    ...Fonts.size_14,
    ...textStyles.centerText,
    ...Spacing.marginTop_20,
  },
  getStartedButton: {
    ...Spacing.marginTop_30,
    backgroundColor: Colors.darkbrown,
    ...Spacing.paddingVertical_12,
    ...Spacing.paddingHorizontal_25,
    ...borderStyles.rounded_8,
  },
  buttonText: {
    color: Colors.white,
    ...Fonts.size_18,
    ...Fonts.weight_900,
  },
  pagination: {
    ...layout.absolute,
    ...layout.bottom90,
  },
  navigationContainer: {
    ...layout.absolute,
    ...layout.bottom80,
    ...layout.fullWidth,
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  dotContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...layout.absolute,
    ...layout.left50,
    ...layout.translateX_30,
  },
  dot: {
    backgroundColor: Colors.dotColor,
    ...layout.width_8,
    ...layout.height_8,
    ...borderStyles.rounded_4,
    ...Spacing.marginHorizontal_4,
  },
  activeDot: {
    backgroundColor: Colors.darkbrown,
    ...layout.width_10,
    ...layout.height_10,
    ...borderStyles.rounded_5,
    ...Spacing.marginHorizontal_4,
  },
  arrowButton: {
    ...layout.absolute,
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...borderStyles.rounded_30,
    backgroundColor: Colors.darkbrown,
  },
  leftButton: {
    ...layout.left20,
    backgroundColor: Colors.white,
    borderColor: Colors.darkbrown,
    ...borderStyles.w_2,
  },
  rightButton: {
    ...layout.right20,
  },
  arrowIcon: {
    ...layout.width_30,
    ...layout.height_30,
    tintColor: Colors.darkbrown,
  }as ImageStyle,
  rightarrowIcon: {
    ...layout.width_30,
    ...layout.height_30,
    tintColor: Colors.white,
  }as ImageStyle,
});
