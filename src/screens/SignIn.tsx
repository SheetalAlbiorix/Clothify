import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { SignInStyle } from "../styles/SignInStyle";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { strings } from "../utils/strings";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../utils/Colors";

type SignInNavigationProp = StackNavigationProp<RootStackParamList, "SignIn">;

const SignIn = () => {
  const navigation = useNavigation<SignInNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();
  const [passwordVisible, setPasswordVisible] = useState(false);

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
          placeholder="example@gmail.com"
          placeholderTextColor={colors.colors.textAccent}
        />

        <Text style={[SignInStyle.label, {color: colors.colors.text}]}>{strings.password}</Text>
        <View style={SignInStyle.passwordInputContainer}>
          <TextInput
            style={SignInStyle.input}
            placeholder="************"
            placeholderTextColor={colors.colors.textAccent}
            secureTextEntry={!passwordVisible}
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
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={[SignInStyle.forgotPassword, {color: colors.colors.text}]}>{strings.forgotPassword}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={SignInStyle.signInButton}>
        <Text style={SignInStyle.signInButtonText}>{strings.signIn}</Text>
      </TouchableOpacity>

      <Text style={[SignInStyle.orSignInWith, {color: colors.colors.text}]}>{strings.orSignInWith}</Text>
      <View style={[SignInStyle.socialContainer, {backgroundColor: colors.colors.background}]}>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={require("../assets/apple.png")}
            style={[SignInStyle.socialIcon, {tintColor: colors.colors.tintColor}]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={require("../assets/google.png")}
            style={SignInStyle.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={SignInStyle.socialButton}>
          <Image
            source={require("../assets/meta.png")}
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
