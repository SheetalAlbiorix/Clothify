import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
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
import { signInWithEmail, signInWithGoogle } from "../service/auth";
import { useUser } from "../hooks/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { validateEmail, validatePassword } from "../utils/Validation";

type SignInNavigationProp = StackNavigationProp<RootStackParamList, "SignIn">;

const SignIn = () => {
  const navigation = useNavigation<SignInNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const { setName, setPhotoUrl } = useUser();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
    setEmailError(validateEmail(text));
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
    setPasswordError(validatePassword(text));
  };

  const isFormValid = !emailError && !passwordError && email && password;

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmail(email, password);
      const user = userCredential.user;
      console.log(strings.usersignedin, user.uid);

      const defaultPhotoUri = Image.resolveAssetSource(images.profileIcon).uri;

      const nameToSet = user.displayName || "Guest";
      const photoToSet = user.photoURL || defaultPhotoUri;

      setName(nameToSet);
      setPhotoUrl(photoToSet);

      await AsyncStorage.setItem("userName", nameToSet);
      await AsyncStorage.setItem("userPhotoUrl", photoToSet);

      navigation.navigate("Tab", { name: "Home", location: "" });
    } catch (error: any) {
      if (error.code === strings.authusernotfound) {
        console.log(strings.noaccountfound);
      } else if (error.code === strings.authwrongpassword) {
        console.log(strings.incorrectpassword);
      } else if (error.code === strings.authinvalidemail) {
        console.log(strings.invalidemail);
      } else {
        Alert.alert(strings.signinFailed, error.message);
      }
    }
  };

  const handleGooglePress = async () => {
    try {
      const userCredential = await signInWithGoogle();
      const user = userCredential.user;

      if (!user) {
        throw new Error(strings.nouserreturned);
      }

      console.log(strings.googleusersignedin, user.uid);

      setName(user.displayName || "Guest");
      setPhotoUrl(user.photoURL || null);

      navigation.navigate("Tab", { name: "Home", location: "" });
    } catch (error: any) {
      console.error(strings.googlesigninerror, error);
      Alert.alert(strings.googlesigninfailed, error.message);
    }
  };

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
        <Text style={[SignInStyle.label, { color: colors.colors.text }]}>
          {strings.email}
        </Text>
        <TextInput
          style={SignInStyle.input}
          placeholder={strings.emailTextdemo}
          placeholderTextColor={colors.colors.textAccent}
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError ? (
          <Text style={SignInStyle.errorText}>{emailError}</Text>
        ) : null}

        <Text style={[SignInStyle.label, { color: colors.colors.text }]}>
          {strings.password}
        </Text>
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
        {passwordError ? (
          <Text style={SignInStyle.errorText}>{passwordError}</Text>
        ) : null}
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("NewPass")}>
        <Text style={SignInStyle.forgotPassword}>{strings.forgotPassword}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[SignInStyle.signInButton, { opacity: isFormValid ? 1 : 0.5 }]}
        disabled={!isFormValid}
        onPress={handleSignIn}
      >
        <Text style={SignInStyle.signInButtonText}>{strings.signIn}</Text>
      </TouchableOpacity>

      <Text style={[SignInStyle.orSignInWith, { color: colors.colors.text }]}>
        {strings.orSignInWith}
      </Text>

      <View
        style={[
          SignInStyle.socialContainer,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={images.appleIcon}
            style={[
              SignInStyle.socialIcon,
              { tintColor: colors.colors.tintColor },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={SignInStyle.socialButton}
          onPress={handleGooglePress}
        >
          <Image source={images.googleIcon} style={SignInStyle.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image source={images.metaIcon} style={SignInStyle.socialIcon} />
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
