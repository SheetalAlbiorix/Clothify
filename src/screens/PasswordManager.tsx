import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { passmanagerstyle } from "../styles/PassManagerStyle";
import { Ionicons } from "@expo/vector-icons";
import * as Crypto from "expo-crypto";
import { auth, db } from "../service/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type PassmanagerNavigationProp = StackNavigationProp<
  RootStackParamList,
  "passwordmanager"
>;

const PasswordManager = () => {
  const colors = useColors();
  const navigation = useNavigation<PassmanagerNavigationProp>();
  const { statusBarStyle } = useTheme();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const hashPassword = async (password: string): Promise<string> => {
    return await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
  };

  const validatePassword = (input: string) => {
    if (!input) return strings.Passrequired;
    if (input.length < 8) return strings.passwordlength;
    return "";
  };

  const handlePasswordChange = async () => {
    const newPassError = validatePassword(newPassword);
    const confirmPassError =
      newPassword !== confirmNewPassword ? "Passwords do not match." : "";

    if (newPassError || confirmPassError) {
      setPasswordError(newPassError || confirmPassError);
      return;
    }

    try {
      const user = auth().currentUser;

      if (!user || !user.email) {
        console.log(strings.errornouserloggedIn);
        return;
      }

      const userDocRef = doc(db, "users", user.email);
      const userDocSnap = await getDoc(userDocRef);

      if (!userDocSnap.exists()) {
        console.log(strings.erroruserdocumentnotfound);
        return;
      }

      const storedHashedPassword = userDocSnap.data()?.password;
      const inputHashedPassword = await hashPassword(currentPassword);

      if (inputHashedPassword !== storedHashedPassword) {
        setPasswordError(strings.currentpasswordisincorrect);
        return;
      }

      const newHashedPassword = await hashPassword(newPassword);

      await updateDoc(userDocRef, {
        password: newHashedPassword,
      });

      console.log(strings.successpasswordupdatesuccess);
      navigation.goBack();
    } catch (error) {
      console.error(strings.passwordupdatefailed, error);
      console.log(strings.errorsomethingwentwrongpasswordupdate);
    }
  };

  return (
    <View
      style={[
        passmanagerstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={passmanagerstyle.headerContainer}>
        <TouchableOpacity
          style={passmanagerstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={passmanagerstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[passmanagerstyle.header, { color: colors.colors.text }]}>
          {strings.passwordmanager}
        </Text>
      </View>

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
            onPress={() => setPasswordVisible(!passwordVisible)}
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
            onPress={() => setPasswordVisible(!passwordVisible)}
            style={passmanagerstyle.eyeIcon}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color={colors.colors.textAccent}
            />
          </TouchableOpacity>
        </View>

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
            onPress={() => setPasswordVisible(!passwordVisible)}
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
