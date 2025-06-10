import { useState } from "react";
import { strings } from "../utils/strings";
import { isPasswordValid } from "../utils/Validation";

export const useNewPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [error, setError] = useState("");

  const validateInputs = () => {
    if (!isPasswordValid(password)) {
      setError(strings.passwordcharacter);
      return false;
    }
    if (password !== confirmPassword) {
      setError(strings.confirmPasswordError);
      return false;
    }
    setError("");
    return true;
  };

  return {
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
    isFormValid: isPasswordValid(password) && password === confirmPassword,
  };
};
