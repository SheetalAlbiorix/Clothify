import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { layout, Spacing, textStyles, borderStyles } from "../components/layout";
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
    ...Spacing.marginBottom_70
  },
  arrowIcon: {
    ...layout.width_20,
    ...layout.height_20,
  }as ImageStyle,
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
  }as ImageStyle,
  editIcon: {
    ...layout.absolute,
    ...layout.bottom0,
    ...layout.right0,
    backgroundColor: Colors.white,
    ...layout.width_30,
    ...layout.height_30,
    ...borderStyles.rounded_15,
    ...layout.padding_5,
  }as ImageStyle,
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
    backgroundColor: Colors.white
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
  }as ImageStyle,
  dropdownIcon2: {
    width: 15,
    height: 15,
    tintColor: Colors.darkgray,
  }as ImageStyle,
  completeProfileButton: {
    width: "100%",
    height: 50,
    backgroundColor: Colors.brown,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  
  modalContainer: {
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  
  modalItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  
  modalText: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
  },
  
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 0,
  },
});
