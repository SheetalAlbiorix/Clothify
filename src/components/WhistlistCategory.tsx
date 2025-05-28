import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { whistlistcategorystyle } from "../styles/WhistlistCategoryStyle";

const categories = [
  strings.All,
  strings.Jacket,
  strings.Shirt,
  strings.pant,
  strings.tshirt,
  strings.Man,
];

const WhistlistCategory = () => {
  const [selected, setSelected] = useState(strings.All);
  const colors = useColors();

  const renderItem = ({ item }: { item: string }) => {
    const isSelected = item === selected;
    return (
      <TouchableOpacity
        style={[
          whistlistcategorystyle.button,
          isSelected && whistlistcategorystyle.selectedButton,
        ]}
        onPress={() => setSelected(item)}
      >
        <Text
          style={[
            [whistlistcategorystyle.buttonText, { color: colors.colors.text }],
            isSelected && [
              whistlistcategorystyle.selectedText,
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
    <View style={whistlistcategorystyle.container}>
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

export default WhistlistCategory;
