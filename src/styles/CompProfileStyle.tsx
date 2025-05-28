import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import {
  layout,
  Spacing,
  textStyles,
  borderStyles,
} from "../components/layout";
import { Fonts } from "../components/fonts";

export const compProfileStyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingTop_70,
    ...layout.itemsCenter,
  },
  backButton: {
    ...layout.absolute,
    ...layout.top60,
    ...layout.left20,
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    ...borderStyles.rounded_30,
    ...borderStyles.w_1,
    ...borderStyles.mediumBrown,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_70,
  },
  arrowIcon: {
    ...layout.width_20,
    ...layout.height_20,
  } as ImageStyle,
  heading: {
    ...Fonts.size_22,
    ...Fonts.weight_900,
    color: Colors.black,
    ...Spacing.marginTop_100,
  },
  subText: {
    ...Fonts.size_14,
    color: Colors.darkgray,
    ...textStyles.centerText,
    ...Spacing.marginBottom_20,
  },
  profileImageContainer: {
    ...layout.width_normal,
    ...layout.height_normal,
    ...borderStyles.rounded_50,
    backgroundColor: Colors.lightgrey,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_20,
  },
  profileImage: {
    ...layout.width_150,
    ...layout.height_150,
  } as ImageStyle,
  editIcon: {
    ...layout.absolute,
    ...layout.bottom0,
    ...layout.right0,
    backgroundColor: Colors.white,
    ...layout.width_30,
    ...layout.height_30,
    ...borderStyles.rounded_15,
    ...layout.padding_5,
  } as ImageStyle,
  inputContainer: {
    ...layout.fullWidth,
  },
  label: {
    ...Fonts.size_14,
    color: Colors.black,
    ...Spacing.marginBottom_5,
  },
  input: {
    ...layout.height_small,
    ...borderStyles.w_1,
    ...borderStyles.lightgrey,
    ...borderStyles.rounded_25,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.marginBottom_15,
    backgroundColor: Colors.white,
  },
  phoneContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    ...borderStyles.w_1,
    ...borderStyles.lightgrey,
    backgroundColor: Colors.white,
    ...borderStyles.rounded_25,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.marginBottom_15,
  },
  countryCode: {
    ...Fonts.size_16,
    color: Colors.black,
    ...Spacing.marginRight_10,
  },
  phoneInput: {
    ...layout.flex_1,
    ...layout.height_small,
    ...Fonts.size_16,
    color: Colors.black,
    backgroundColor: Colors.white,
  },
  dropdown: {
    ...layout.height_small,
    ...borderStyles.w_1,
    borderColor: Colors.lightgrey,
    backgroundColor: Colors.white,
    ...borderStyles.rounded_25,
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_15,
    ...Spacing.marginBottom_30,
  },
  dropdownText: {
    ...Fonts.size_16,
  },
  dropdownIcon1: {
    ...layout.width_10,
    ...layout.height_10,
    ...Spacing.marginRight_15,
    tintColor: Colors.darkgray,
  } as ImageStyle,
  dropdownIcon2: {
    ...layout.width_15,
    ...layout.height_15,
    tintColor: Colors.darkgray,
  } as ImageStyle,
  completeProfileButton: {
    ...layout.fullWidth,
    ...layout.height_small,
    backgroundColor: Colors.brown,
    ...borderStyles.rounded_30,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  buttonText: {
    ...Fonts.size_16,
    color: Colors.white,
    ...Fonts.weight_900,
  },
  modalOverlay: {
    ...layout.flex_1,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    backgroundColor: Colors.transparentblack,
  },

  modalContainer: {
    backgroundColor: Colors.white,
    ...layout.mediumWidth,
    ...borderStyles.rounded_8,
    ...Spacing.paddingVertical_10,
    ...Spacing.paddingHorizontal_15,
  },

  modalItem: {
    ...Spacing.paddingVertical_12,
    ...borderStyles.wBottom_1,
    ...borderStyles.borderBottomgrayish,
  },

  modalText: {
    ...Fonts.size_16,
    ...textStyles.centerText,
    color: Colors.black,
  },

  errorText: {
    color: Colors.red,
    ...Fonts.size_12,
    ...Spacing.marginBottom_0,
  },
});
