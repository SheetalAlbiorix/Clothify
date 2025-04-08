import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { borderStyles, layout, Spacing } from "./layout";
import { Colors } from "../utils/Colors";

const ReusableRadioButton = ({ label, value, selectedValue, onPress }: any) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      style={{
        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.radio}>
        {selectedValue === value && <View style={styles.selectedRadio}></View>}
      </View>
      <Text style={{ flex: 1, fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ReusableRadioButton;

const styles = StyleSheet.create({
  radio: {
    ...layout.width_20,
    ...layout.height_20,
    ...borderStyles.rounded_15,
    ...borderStyles.w_1,
    ...borderStyles.darkishgray,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginRight_20,
  },
  selectedRadio: {
    ...layout.width_12,
    ...layout.height_12,
    ...borderStyles.rounded_10,
    backgroundColor: Colors.darkcoffee,
    ...borderStyles.w_1,
    ...borderStyles.black,
  },
});
