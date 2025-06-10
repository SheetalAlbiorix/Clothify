import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { categoryfilterstyle } from "../styles/CategoryFilterStyle";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import Data from "../utils/Data.json";

const categories = Data.categories.map(
  (key) => strings[key as keyof typeof strings] || key
);

const CategoryFilterCarousel = () => {
  const [selected, setSelected] = useState(strings.All);
  const colors = useColors();

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = item === selected;
    return (
      <TouchableOpacity
        style={[
          categoryfilterstyle.button,
          isSelected && categoryfilterstyle.selectedButton,
        ]}
        onPress={() => setSelected(item)}
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
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={renderItem}
      />
    </View>
  );
};

export default CategoryFilterCarousel;
