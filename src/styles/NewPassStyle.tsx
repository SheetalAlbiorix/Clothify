import { ImageStyle, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { borderStyles, layout, Spacing } from "../components/layout";

export const newpassstyle = StyleSheet.create({
  container: {
    ...layout.flex_1,
    ...Spacing.paddingHorizontal_20,
    ...Spacing.paddingTop_50,
  },
  backButton: {
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    ...borderStyles.rounded_30,
    ...borderStyles.w_1,
    ...borderStyles.mediumBrown,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_70,
  },
  leftarrowImage: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
  }as ImageStyle,
  verifyTextContainer: {
    ...layout.itemsCenter,
    ...Spacing.marginBottom_20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
  },
  VerifytextSecondary: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
  },
  emailtextdemo: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    color: "#888",
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#333",
  },
  eyeIcon: {
    width: 20,
    height: 20,
    tintColor: "#888",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: -5,
    marginBottom: 10,
    textAlign: "left",
  },
  submitButton: {
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: Colors.mediumbrown,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
