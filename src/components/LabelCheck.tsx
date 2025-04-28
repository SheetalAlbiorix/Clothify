import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Colors } from "../utils/Colors";
import { Fonts } from "./fonts";
import { borderStyles, layout, Spacing } from "./layout";

interface CheckboxLabelProps {
  checked: boolean;
  label: string;
  onPress: () => void;
}

const LabelCheck: React.FC<CheckboxLabelProps> = ({
  checked,
  label,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.checkbox}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.label}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...layout.row,
    ...layout.itemsCenter,
    ...Spacing.marginVertical_8,
  },
  checkbox: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    ...borderStyles.w_2,
    borderColor: Colors.cardColor,
    ...layout.justifyCenter,
    ...layout.itemsCenter,
    backgroundColor: Colors.white,
  },
  checkmark: {
    color: Colors.cardColor,
    ...Fonts.weight_900,
    ...Fonts.size_16,
  },
  label: {
    ...Spacing.marginLeft_12,
    color: Colors.white,
    ...Fonts.size_14,
    ...Fonts.weight_500,
  },
});

export default LabelCheck;
