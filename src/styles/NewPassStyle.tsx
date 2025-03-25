import { StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";

export const newpassstyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  leftarrowImage: {
    width: 24,
    height: 24,
  },
  verifyTextContainer: {
    alignItems: "center",
    marginBottom: 20,
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
    backgroundColor: Colors.mediumbrown
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
  },
});
