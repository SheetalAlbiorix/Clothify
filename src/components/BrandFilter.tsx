import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { categoryfilterstyle } from "../styles/CategoryFilterStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { BrandFilterProps } from "../types/types";
import Data from "../utils/Data.json";

const BrandFilters = Data.BrandFilters.map(
  (key) => strings[key as keyof typeof strings] || key
);

const BrandFilter: React.FC<BrandFilterProps> = ({ selected, onSelect }) => {
  const colors = useColors();
  const renderItem = ({ item }: { item: string }) => {
    const isSelected = item === selected;
    return (
      <TouchableOpacity
        style={[
          categoryfilterstyle.button,
          isSelected && categoryfilterstyle.selectedButton,
        ]}
        onPress={() => onSelect(item)}
      >
        <Text
          style={[
            [categoryfilterstyle.buttonText, { color: colors.colors.text }],
            isSelected && [
              categoryfilterstyle.selectedText,
              { color: colors.colors.caroselText },
            ],
          ]}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={categoryfilterstyle.container}>
      <FlatList
        data={BrandFilters}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

export default BrandFilter;
