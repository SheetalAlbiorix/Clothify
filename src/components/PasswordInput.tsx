import React from "react";
import { TextInput, TouchableOpacity, Image, View, Text } from "react-native";
import { images } from "../utils/images";
import { newpassstyle } from "../styles/NewPassStyle";

interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  secureTextEntry: boolean;
  toggleSecureTextEntry: () => void;
  placeholder: string;
  placeholderTextColor: string;
}

const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  value,
  onChange,
  secureTextEntry,
  toggleSecureTextEntry,
  placeholder,
  placeholderTextColor,
}) => {
  return (
    <View style={newpassstyle.inputContainer}>
      <Text style={newpassstyle.inputLabel}>{label}</Text>
      <View style={newpassstyle.inputField}>
        <TextInput
          style={newpassstyle.textInput}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
          value={value}
        />
        <TouchableOpacity onPress={toggleSecureTextEntry}>
          <Image
            style={newpassstyle.eyeIcon}
            source={secureTextEntry ? images.eyeClosed : images.eyeOpen}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordInput;
