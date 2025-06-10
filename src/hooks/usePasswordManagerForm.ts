import { useState } from "react";
import { strings } from "../utils/strings";
import * as Crypto from "expo-crypto";
import { auth, db } from "../service/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { isPasswordValid } from "../utils/Validation";

export const usePasswordManagerForm = (
  navigation: StackNavigationProp<RootStackParamList>
) => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () =>
    setPasswordVisible((prev) => !prev);

  const hashPassword = async (password: string): Promise<string> => {
    return await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password
    );
  };

  const handlePasswordChange = async () => {
    if (!isPasswordValid(newPassword)) {
      setPasswordError(strings.passwordcharacter);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setPasswordError(strings.confirmPasswordError);
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

      await updateDoc(userDocRef, { password: newHashedPassword });

      console.log(strings.successpasswordupdatesuccess);
      navigation.goBack();
    } catch (error) {
      console.error(strings.passwordupdatefailed, error);
      console.log(strings.errorsomethingwentwrongpasswordupdate);
    }
  };

  return {
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
  };
};
