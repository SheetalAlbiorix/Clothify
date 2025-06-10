import React from "react";
import { View, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";
import { newpassstyle } from "../styles/NewPassStyle";
import { Colors } from "../utils/Colors";
import PasswordInput from "../components/PasswordInput";
import ErrorMessage from "../components/ErrorMessage";
import PasswordSubmitButton from "../components/PasswordSubmitButton";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "../themes/theme";
import { RootStackParamList } from "../types/types";
import { useNewPasswordForm } from "../hooks/useNewPasswordForm";

const NewPassword = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colors = useColors();
  const { statusBarStyle } = useTheme();

  const {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    securePassword,
    setSecurePassword,
    secureConfirmPassword,
    setSecureConfirmPassword,
    error,
    validateInputs,
    isFormValid,
  } = useNewPasswordForm();

  const handleSubmit = () => {
    if (validateInputs()) {
      navigation.navigate("CompleteProfile");
      console.log(strings.passwordchangedsuccess);
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

      <PasswordInput
        label={strings.password}
        value={password}
        onChange={setPassword}
        secureTextEntry={securePassword}
        toggleSecureTextEntry={() => setSecurePassword(!securePassword)}
        placeholder={strings.starText}
        placeholderTextColor={colors.colors.textAccent}
      />

      <PasswordInput
        label={strings.confirmPassword}
        value={confirmPassword}
        onChange={setConfirmPassword}
        secureTextEntry={secureConfirmPassword}
        toggleSecureTextEntry={() =>
          setSecureConfirmPassword(!secureConfirmPassword)
        }
        placeholder={strings.starText}
        placeholderTextColor={colors.colors.textAccent}
      />

      {error ? <ErrorMessage message={error} /> : null}

      <PasswordSubmitButton
        isEnabled={isFormValid}
        onPress={handleSubmit}
        buttonText={strings.createNewPassword}
        backgroundColor={
          isFormValid ? Colors.mediumbrown : colors.colors.textAccent
        }
      />
    </View>
  );
};

export default NewPassword;
