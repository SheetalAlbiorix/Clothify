import React from "react";
import { ScrollView, TouchableOpacity, Text } from "react-native";
import { helpcenterstyle } from "../styles/HelpCenterStyle";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories, activeCategory, onSelect }) => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false} style={helpcenterstyle.categoriesContainer}>
    {categories.map((category) => (
      <TouchableOpacity
        key={category}
        style={[helpcenterstyle.categoryButton, activeCategory === category && helpcenterstyle.activeCategoryButton]}
        onPress={() => onSelect(category)}
      >
        <Text
          style={[
            helpcenterstyle.categoryText,
            activeCategory === category && helpcenterstyle.activeCategoryText,
          ]}
        >
          {category}
        </Text>
      </TouchableOpacity>
    ))}
  </ScrollView>
);
