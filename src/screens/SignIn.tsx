import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import { SignInStyle } from "../styles/SignInStyle";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { strings } from "../utils/strings";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { images } from "../utils/images";

type SignInNavigationProp = StackNavigationProp<RootStackParamList, "SignIn">;

const SignIn = () => {
  const navigation = useNavigation<SignInNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input) return "Email is required";
    if (!emailRegex.test(input)) return strings.entervalidemail;
    return "";
  };

  const validatePassword = (input: string) => {
    if (!input) return strings.Passrequired;
    if (input.length < 8) return strings.passwordlength;
    return "";
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError(validateEmail(text));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError(validatePassword(text));
  };

  const isFormValid = !emailError && !passwordError && email && password;

  return (
    <View
      style={[
        SignInStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={SignInStyle.singinTextContainer}>
        <Text style={[SignInStyle.heading, { color: colors.colors.text }]}>
          {strings.signIn}
        </Text>
        <Text
          style={[
            SignInStyle.SignIntextSecondary,
            { color: colors.colors.textAccent },
          ]}
        >
          {strings.Hiwelcometextmissed}
        </Text>
      </View>

      <View
        style={[
          SignInStyle.inputContainer,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <Text style={[SignInStyle.label, {color: colors.colors.text}]}>{strings.email}</Text>
        <TextInput
          style={SignInStyle.input}
          placeholder={strings.emailTextdemo}
          placeholderTextColor={colors.colors.textAccent}
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? <Text style={SignInStyle.errorText}>{emailError}</Text> : null}

        <Text style={[SignInStyle.label, {color: colors.colors.text}]}>{strings.password}</Text>
        <View style={SignInStyle.passwordInputContainer}>
          <TextInput
            style={SignInStyle.input}
            placeholder={strings.starText}
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={SignInStyle.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color={colors.colors.textAccent}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? <Text style={SignInStyle.errorText}>{passwordError}</Text> : null}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("NewPass")}>
        <Text style={SignInStyle.forgotPassword}>{strings.forgotPassword}</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[
          SignInStyle.signInButton, 
          { opacity: isFormValid ? 1 : 0.5 }
        ]}
        disabled={!isFormValid}
      >
        <Text style={SignInStyle.signInButtonText}>{strings.signIn}</Text>
      </TouchableOpacity>

      <Text style={[SignInStyle.orSignInWith, {color: colors.colors.text}]}>{strings.orSignInWith}</Text>
      <View style={[SignInStyle.socialContainer, {backgroundColor: colors.colors.background}]}>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={images.appleIcon}
            style={[SignInStyle.socialIcon, {tintColor: colors.colors.tintColor}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={images.googleIcon}
            style={SignInStyle.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={images.metaIcon}
            style={SignInStyle.socialIcon}
          />
        </TouchableOpacity>
      </View>

      <View style={SignInStyle.signUpContainer}>
        <Text style={SignInStyle.signUpText}>{strings.dontHaveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={SignInStyle.signUpLink}>{strings.signUp}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;
