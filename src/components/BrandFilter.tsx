import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { categoryfilterstyle } from "../styles/CategoryFilterStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";

const categories = [strings.All, strings.Nike, strings.Puma, strings.Adidas, strings.Jordans, strings.Reebok];

type BrandFilterProps = {
  selected: string;
  onSelect: (value: string) => void;
};

const BrandFilter: React.FC<BrandFilterProps> = ({ selected, onSelect }) => {  const colors = useColors();
  const renderItem = ({ item }: { item: string }) => {
    const isSelected = item === selected;
    return (
      <TouchableOpacity
        style={[categoryfilterstyle.button, isSelected && categoryfilterstyle.selectedButton]}
        onPress={() => onSelect(item)}
      >
        <Text style={[[categoryfilterstyle.buttonText, {color: colors.colors.text}], isSelected && [categoryfilterstyle.selectedText, {color: colors.colors.caroselText}]]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={categoryfilterstyle.container}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BrandFilter;
