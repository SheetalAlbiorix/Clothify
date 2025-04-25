import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { Colors } from "../utils/Colors";
import { layout, Spacing } from "./layout";
import { Fonts } from "./fonts";
import { useColors } from "../hooks/useColors";

type PricingRangeProps = {
  value: number[];
  onChange: (value: number[]) => void;
};

const PricingRange: React.FC<PricingRangeProps> = ({ value, onChange }) => {
  const screenWidth = Dimensions.get("window").width;
  const colors = useColors();

  const handleValuesChange = (newValues: any) => {
    onChange(newValues);
  };

  return (
    <View style={styles.container}>
      <MultiSlider
        values={value}
        sliderLength={screenWidth - 75}
        min={2}
        max={150}
        step={1}
        onValuesChange={handleValuesChange}
        selectedStyle={styles.selectedstyle}
        unselectedStyle={styles.unselectedstyle}
        markerStyle={styles.markerstyles}
        containerStyle={styles.containerstyle}
      />

      <View style={styles.labelsContainer}>
        {[2, 7, 22, 50, 100, "150+"].map((label, index) => (
          <Text key={index} style={[styles.label, { color: colors.colors.text }]}>
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Spacing.padding_16,
  },
  labelsContainer: {
    ...layout.row,
    ...layout.justifyBetween,
    ...Spacing.paddingHorizontal_2,
    ...Spacing.marginTop_8,
  },
  label: {
    ...Fonts.size_12,
    color: Colors.white,
  },
  selectedstyle: {
    backgroundColor: Colors.darkcoffee,
  },
  unselectedstyle: {
    backgroundColor: Colors.MildBlack,
  },
  markerstyles: {
    backgroundColor: Colors.darkcoffee,
    ...layout.height_20,
    ...layout.width_20,
  },
  containerstyle: {
    ...layout.SelfCenterView,
    ...layout.fullWidth,
  },
});

export default PricingRange;
