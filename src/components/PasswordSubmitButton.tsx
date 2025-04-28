import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { newpassstyle } from '../styles/NewPassStyle';

interface PasswordSubmitButtonProps {
  isEnabled: boolean;
  onPress: () => void;
  buttonText: string;
  backgroundColor: string;
}

const PasswordSubmitButton: React.FC<PasswordSubmitButtonProps> = ({
  isEnabled,
  onPress,
  buttonText,
  backgroundColor
}) => {
  return (
    <TouchableOpacity
      style={[newpassstyle.submitButton, { backgroundColor }]}
      onPress={onPress}
      disabled={!isEnabled}
      activeOpacity={0.7}
    >
      <Text style={newpassstyle.submitButtonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default PasswordSubmitButton;
