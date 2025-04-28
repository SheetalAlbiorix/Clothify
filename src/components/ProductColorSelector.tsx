import { View, Text, TouchableOpacity } from "react-native";
import { useColors } from "../hooks/useColors";
import { productstyle } from "../styles/ProductDetailStyle";
import { strings } from "../utils/strings";
import { ColorNames } from "../utils/Colors";

const ProductColorSelector = ({
  selectedColor,
  setSelectedColor,
  colorList,
}: any) => {
  const colors = useColors();

  return (
    <>
      <Text style={[productstyle.sectionTitle, { color: colors.colors.text }]}>
        {strings.selectColor} {ColorNames[selectedColor] || strings.none}
      </Text>
      <View style={productstyle.colorContainer}>
        {colorList.map((color: string, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedColor(color)}
            style={[productstyle.colorBox, { backgroundColor: color }]}
          >
            {selectedColor === color && (
              <View style={productstyle.selectedIndicator} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default ProductColorSelector;
