import { TextInput } from "react-native";
import { strings } from "./strings";
import React, { useRef } from "react";
import { handleChangeProps, handleKeyPressProps } from "../types/types";

export const isPasswordValid = (pass: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordRegex.test(pass);
};

export const validateEmail = (input: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input) return strings.emailrequired;
    if (!emailRegex.test(input)) return strings.entervalidemail;
  return "";
};

export const validatePassword = (input: string) => {
  if (!input) return strings.Passrequired;
  if (input.length < 8) return strings.passwordlength;
  return "";
};

export const validateName = (input: string) => {
    if (!input) return strings.namerequired;
    if (input.length < 2) return strings.namelength;
    return "";
};

export const validateEmails = (input: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!input) return strings.emailrequired;
    if (!emailRegex.test(input)) return strings.entervalidemail;
  return "";
};

export const validatePasswords = (input: string) => {
    if (!input) return strings.Passrequired;
    if (input.length < 8) return strings.passwordlength;
    return "";
};

const OTP_LENGTH = 4;
export const createInputRefs = () =>
  React.useRef<Array<TextInput | null>>(new Array(OTP_LENGTH).fill(null));

export const handleChange = ({
  text,
  index,
  otp,
  setOtp,
  inputRefs,
  handleVerify,
}: handleChangeProps) => {
  if (!/^\d*$/.test(text)) return;

  const digits = text.split("");
  if (digits.length === OTP_LENGTH) {
    setOtp(digits);
    handleVerify(digits.join(""));
    return;
  }

  const newOtp = [...otp];
  newOtp[index] = text;
  setOtp(newOtp);

  if (text && index < OTP_LENGTH - 1) {
    inputRefs.current?.[index + 1]?.focus();
  }

  if (newOtp.join("").length === OTP_LENGTH) {
    handleVerify(newOtp.join(""));
  }
};

export const handleKeyPress = ({
  e,
  index,
  otp,
  inputRefs,
}: handleKeyPressProps) => {
  if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
    inputRefs.current?.[index - 1]?.focus();
  }
};
