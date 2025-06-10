import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { passmanagerstyle } from "../styles/PassManagerStyle";
import { RootStackParamList } from "../../App";
import { usePasswordManagerForm } from "../hooks/usePasswordManagerForm";
import Header from "../components/HeaderGlobal";

type PassmanagerNavigationProp = StackNavigationProp<
  RootStackParamList,
  "passwordmanager"
>;

const PasswordManager = () => {
  const navigation = useNavigation<PassmanagerNavigationProp>();
  const colors = useColors();
  const { statusBarStyle } = useTheme();

  const {
    currentPassword,
    newPassword,
    confirmNewPassword,
    setCurrentPassword,
    setNewPassword,
    setConfirmNewPassword,
    passwordVisible,
    togglePasswordVisibility,
    passwordError,
    handlePasswordChange,
  } = usePasswordManagerForm(navigation);

  return (
    <View
      style={[
        passmanagerstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="passwordmanager" />

      <View style={passmanagerstyle.mainContainer}>
        <Text style={[passmanagerstyle.label, { color: colors.colors.text }]}>
          {strings.currentpassword}
        </Text>
        <View style={passmanagerstyle.passwordContainer}>
          <TextInput
            style={passmanagerstyle.input}
            placeholder={strings.starText}
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={!passwordVisible}
            value={currentPassword}
            onChangeText={setCurrentPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={passmanagerstyle.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color={colors.colors.textAccent}
            />
          </TouchableOpacity>
        </View>

        <View style={passmanagerstyle.forgotpasscontainer}>
          <TouchableOpacity>
            <Text
              style={[
                passmanagerstyle.forgotpass,
                { color: colors.colors.iconColor },
              ]}
            >
              {strings.forgotPassword}
            </Text>
          </TouchableOpacity>
        </View>

        {/* New Password */}
        <Text style={[passmanagerstyle.label, { color: colors.colors.text }]}>
          {strings.newPassword}
        </Text>
        <View style={passmanagerstyle.passwordContainer}>
          <TextInput
            style={passmanagerstyle.input}
            placeholder={strings.starText}
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={!passwordVisible}
            value={newPassword}
            onChangeText={setNewPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={passmanagerstyle.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color={colors.colors.textAccent}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={[passmanagerstyle.label, { color: colors.colors.text }]}>
          {strings.confirmnewpassword}
        </Text>
        <View style={passmanagerstyle.passwordContainer}>
          <TextInput
            style={passmanagerstyle.input}
            placeholder={strings.starText}
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={!passwordVisible}
            value={confirmNewPassword}
            onChangeText={setConfirmNewPassword}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={passmanagerstyle.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color={colors.colors.textAccent}
            />
          </TouchableOpacity>
        </View>

        {passwordError ? (
          <Text style={passmanagerstyle.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      {/* Footer */}
      <View
        style={[
          passmanagerstyle.footerContainer,
          {
            backgroundColor: colors.colors.background,
            borderTopColor: colors.colors.borderColor,
          },
        ]}
      >
        <TouchableOpacity
          style={passmanagerstyle.changebutton}
          onPress={handlePasswordChange}
        >
          <Text style={passmanagerstyle.changepassText}>
            {strings.changepassword}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordManager;
