import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { strings } from "../utils/strings";
import { Colors } from "../utils/Colors";
import { Fonts } from "./fonts";
import { borderStyles, layout, Spacing } from "./layout";
import { CustomCheckboxProps } from "../types/types";

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  checked,
  onToggle,
}) => {
  return (
    <TouchableOpacity onPress={onToggle} style={styles.checkboxContainer}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && <Text style={styles.checkmark}>{strings.tick}</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    ...layout.row,
    ...layout.itemsCenter,
    backgroundColor: Colors.white,
    ...Spacing.marginBottom_10,
  },
  checkbox: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    ...borderStyles.w_2,
    borderColor: Colors.darkbrown,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
  },
  checked: {
    backgroundColor: Colors.mediumbrown,
  },
  checkmark: {
    color: Colors.white,
    ...Fonts.size_14,
    ...Fonts.weight_900,
  },
});

export default CustomCheckbox;
