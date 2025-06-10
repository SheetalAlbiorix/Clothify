import React from "react";
import { Text } from "react-native";
import { newpassstyle } from "../styles/NewPassStyle";
import { ErrorMessageProps } from "../types/types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <Text style={newpassstyle.errorText}>{message}</Text>;
};

export default ErrorMessage;
