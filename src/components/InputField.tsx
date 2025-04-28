import React from "react";
import { TextInput, Text, View, TextInputProps, StyleProp, ViewStyle } from "react-native";
import { addcardstyles } from "../styles/AddCardStyle";
import { useColors } from "../hooks/useColors";
import { Colors } from "../utils/Colors";

interface InputFieldProps extends TextInputProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

const InputField: React.FC<InputFieldProps> = ({ label, style, ...props }) => {
  const colors = useColors();

  return (
    <View style={[addcardstyles.inputGroup, style]}>
      <Text style={[addcardstyles.inputLabel, { color: colors.colors.text }]}>
        {label}
      </Text>
      <TextInput
        {...props}
        style={[addcardstyles.input, { color: colors.colors.text }]}
        placeholderTextColor={Colors.mediumgrey}
      />
    </View>
  );
};

export default InputField;
