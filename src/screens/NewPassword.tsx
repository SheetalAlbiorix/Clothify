import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { newpassstyle } from "../styles/NewPassStyle";
import { Colors } from "../utils/Colors";

type NewPassNavigationProp = StackNavigationProp<RootStackParamList, "NewPass">;

const NewPassword = () => {
  const navigation = useNavigation<NewPassNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [error, setError] = useState("");

  const isPasswordValid = (pass: string) => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      pass
    );
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setError("");
  };

  const handleConfirmPasswordChange = (text: string) => {
    setConfirmPassword(text);
    setError("");
  };

  const validateInputs = () => {
    if (!isPasswordValid(password)) {
      setError(
        "Password must be at least 8 characters, with a number & special character."
      );
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateInputs()) {
      console.log("Password changed successfully!");
    }
  };

  return (
    <View
      style={[
        newpassstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />

      <TouchableOpacity
        style={[
          newpassstyle.backButton,
          { backgroundColor: colors.colors.background },
        ]}
        onPress={() => navigation.navigate("Verify")}
      >
        <Image
          style={[
            newpassstyle.leftarrowImage,
            { tintColor: colors.colors.tintColor },
          ]}
          source={images.leftarrow}
        />
      </TouchableOpacity>

      <View style={newpassstyle.verifyTextContainer}>
        <Text style={[newpassstyle.heading, { color: colors.colors.text }]}>
          {strings.newPassword}
        </Text>
        <Text
          style={[
            newpassstyle.VerifytextSecondary,
            { color: colors.colors.textAccent },
          ]}
        >
          {strings.passwordInfo}
        </Text>
      </View>

      <View style={newpassstyle.inputContainer}>
        <Text style={newpassstyle.inputLabel}>Password</Text>
        <View style={newpassstyle.inputField}>
          <TextInput
            style={newpassstyle.textInput}
            placeholder="********"
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={securePassword}
            onChangeText={handlePasswordChange}
            value={password}
          />
          <TouchableOpacity onPress={() => setSecurePassword(!securePassword)}>
            <Image
              style={newpassstyle.eyeIcon}
              source={securePassword ? images.eyeClosed : images.eyeOpen}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={newpassstyle.inputContainer}>
        <Text style={newpassstyle.inputLabel}>Confirm Password</Text>
        <View style={newpassstyle.inputField}>
          <TextInput
            style={newpassstyle.textInput}
            placeholder="********"
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={secureConfirmPassword}
            onChangeText={handleConfirmPasswordChange}
            value={confirmPassword}
          />
          <TouchableOpacity
            onPress={() => setSecureConfirmPassword(!secureConfirmPassword)}
          >
            <Image
              style={newpassstyle.eyeIcon}
              source={secureConfirmPassword ? images.eyeClosed : images.eyeOpen}
            />
          </TouchableOpacity>
        </View>
      </View>

      {error ? <Text style={newpassstyle.errorText}>{error}</Text> : null}

      <TouchableOpacity
        style={[
          newpassstyle.submitButton,
          {
            backgroundColor:
              isPasswordValid(password) && password === confirmPassword
                ? Colors.mediumbrown
                : colors.colors.textAccent,
          },
        ]}
        onPress={handleSubmit}
        disabled={!isPasswordValid(password) || password !== confirmPassword}
        activeOpacity={0.7}
      >
        <Text style={newpassstyle.submitButtonText}>
          {strings.createNewPassword}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPassword;
