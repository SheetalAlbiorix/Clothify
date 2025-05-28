import React, { useState } from "react";
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

type RootStackParamList = {
  CompleteProfile: undefined;
};

const NewPassword = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colors = useColors();
  const { statusBarStyle } = useTheme();
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

  const validateInputs = () => {
    if (!isPasswordValid(password)) {
      setError(strings.passwordcharacter);
      return false;
    }
    if (password !== confirmPassword) {
      setError(strings.confirmPasswordError);
      return false;
    }
    return true;
  };

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
        onChange={(text) => setPassword(text)}
        secureTextEntry={securePassword}
        toggleSecureTextEntry={() => setSecurePassword(!securePassword)}
        placeholder={strings.starText}
        placeholderTextColor={colors.colors.textAccent}
      />

      <PasswordInput
        label={strings.confirmPassword}
        value={confirmPassword}
        onChange={(text) => setConfirmPassword(text)}
        secureTextEntry={secureConfirmPassword}
        toggleSecureTextEntry={() =>
          setSecureConfirmPassword(!secureConfirmPassword)
        }
        placeholder={strings.starText}
        placeholderTextColor={colors.colors.textAccent}
      />

      {error ? <ErrorMessage message={error} /> : null}

      <PasswordSubmitButton
        isEnabled={isPasswordValid(password) && password === confirmPassword}
        onPress={handleSubmit}
        buttonText={strings.createNewPassword}
        backgroundColor={
          isPasswordValid(password) && password === confirmPassword
            ? Colors.mediumbrown
            : colors.colors.textAccent
        }
      />
    </View>
  );
};

export default NewPassword;
