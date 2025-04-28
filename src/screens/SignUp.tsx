import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { SignUpStyle } from "../styles/SignUpStyle";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { strings } from "../utils/strings";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import CustomCheckbox from "../components/CheckBox";
import { images } from "../utils/images";
import { getAuth } from "firebase/auth";
import { signUpWithGoogle } from "../service/auth";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { generateOtp } from "../service/generateOtp";
import AsyncStorage from "@react-native-async-storage/async-storage";

type SignUpNavigationProp = StackNavigationProp<RootStackParamList, "SignUp">;

const SignUp = () => {
  const auth = getAuth();
  const navigation = useNavigation<SignUpNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateName = (input: string) => {
    if (!input) return strings.namerequired;
    if (input.length < 2) return strings.namelength;
    return "";
  };

  const validateEmail = (input: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input) return strings.emailrequired;
    if (!emailRegex.test(input)) return strings.entervalidemail;
    return "";
  };

  const validatePassword = (input: string) => {
    if (!input) return strings.Passrequired;
    if (input.length < 8) return strings.passwordlength;
    return "";
  };

  const handleNameChange = (text: string) => {
    setName(text);
    setNameError(validateName(text));
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError(validateEmail(text));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError(validatePassword(text));
  };

  const isFormValid =
    !nameError &&
    !emailError &&
    !passwordError &&
    name &&
    email &&
    password &&
    isChecked;

  const handleSignUp = async () => {
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: "",
      });

      await AsyncStorage.setItem("userName", name);
      await AsyncStorage.setItem("userPhotoUrl", "");

      const otp = generateOtp();
      console.log(strings.usersignedup, user);
      Alert.alert(strings.generatedotp, otp);
      navigation.navigate("Verify", { otp, email });
    } catch (error) {
      console.error(strings.signuperror, error);
      const errorMessage =
        error instanceof Error ? error.message : strings.somethingwentwrong;
      Alert.alert(strings.signuperror, errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleGooglePress = async () => {
    try {
      const userCredential = await signUpWithGoogle();
      console.log(strings.googlesigninsuccess, userCredential.user.email);
      const otp = generateOtp();
      Alert.alert(strings.generatedotp, otp);
      navigation.navigate("Verify", { otp, email });
    } catch (error: any) {
      console.error(strings.googlesigninfailed, error);
      Alert.alert(
        strings.googlesigninfailed,
        error.message || strings.somethingwentwrong
      );
    }
  };

  return (
    <View
      style={[
        SignUpStyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={SignUpStyle.singinTextContainer}>
        <Text style={[SignUpStyle.heading, { color: colors.colors.text }]}>
          {strings.createAccount}
        </Text>
        <Text
          style={[
            SignUpStyle.SignIntextSecondary,
            { color: colors.colors.textAccent },
          ]}
        >
          {strings.fillinformationregisterText}
        </Text>
      </View>

      <View
        style={[
          SignUpStyle.inputContainer,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <Text style={[SignUpStyle.label, { color: colors.colors.text }]}>
          {strings.name}
        </Text>
        <TextInput
          style={SignUpStyle.input}
          placeholder={strings.johndoe}
          placeholderTextColor={colors.colors.textAccent}
          value={name}
          onChangeText={handleNameChange}
        />
        {nameError ? (
          <Text style={SignUpStyle.errorText}>{nameError}</Text>
        ) : null}

        <Text style={[SignUpStyle.label, { color: colors.colors.text }]}>
          {strings.email}
        </Text>
        <TextInput
          style={SignUpStyle.input}
          placeholder={strings.emailTextdemo}
          placeholderTextColor={colors.colors.textAccent}
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? (
          <Text style={SignUpStyle.errorText}>{emailError}</Text>
        ) : null}

        <Text style={[SignUpStyle.label, { color: colors.colors.text }]}>
          {strings.password}
        </Text>
        <View style={SignUpStyle.passwordInputContainer}>
          <TextInput
            style={SignUpStyle.input}
            placeholder={strings.starText}
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={!passwordVisible}
            value={password}
            onChangeText={handlePasswordChange}
          />
          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={SignUpStyle.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color={colors.colors.textAccent}
            />
          </TouchableOpacity>
        </View>
        {passwordError ? (
          <Text style={SignUpStyle.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={SignUpStyle.checkboxContainer}
        onPress={() => setIsChecked(!isChecked)}
      >
        <CustomCheckbox
          checked={isChecked}
          onToggle={() => setIsChecked(!isChecked)}
        />
        <View style={SignUpStyle.agreeconditionContainer}>
          <Text style={[SignUpStyle.AgreeTerms, { color: colors.colors.text }]}>
            {strings.agreewith}
          </Text>
          <Text style={SignUpStyle.termscondition}>
            {strings.termscondition}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          SignUpStyle.signInButton,
          { opacity: isFormValid && !loading ? 1 : 0.5 },
        ]}
        onPress={isFormValid && !loading ? handleSignUp : undefined}
        disabled={!isFormValid || loading}
      >
        <Text style={SignUpStyle.signInButtonText}>
          {loading ? "Signing Up..." : strings.signUp}
        </Text>
      </TouchableOpacity>

      <Text style={[SignUpStyle.orSignInWith, { color: colors.colors.text }]}>
        {strings.orSignUpWith}
      </Text>
      <View
        style={[
          SignUpStyle.socialContainer,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <TouchableOpacity style={SignUpStyle.socialButton}>
          <Image
            source={images.appleIcon}
            style={[
              SignUpStyle.socialIcon,
              { tintColor: colors.colors.tintColor },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={SignUpStyle.socialButton}
          onPress={handleGooglePress}
        >
          <Image source={images.googleIcon} style={SignUpStyle.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={SignUpStyle.socialButton}>
          <Image source={images.metaIcon} style={SignUpStyle.socialIcon} />
        </TouchableOpacity>
      </View>

      <View style={SignUpStyle.signUpContainer}>
        <Text style={SignUpStyle.signUpText}>{strings.alreadyhaveAccount}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={SignUpStyle.signUpLink}>{strings.signIn}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
