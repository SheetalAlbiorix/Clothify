import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { chooseshippingStyle } from "../styles/ChooseShippingStyle";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { ChooseShipRenderItemProps } from "../types/types";

const ChooseShipRenderItem: React.FC<ChooseShipRenderItemProps> = ({
  item,
  selectedItem,
  onSelect,
}) => {
  const colors = useColors();

  return (
    <Pressable
      style={chooseshippingStyle.chooseaddressItem}
      onPress={() => onSelect(item)}
    >
      <View style={chooseshippingStyle.chooseaddressInfo}>
        <Image
          source={images.locationpin}
          style={chooseshippingStyle.boxtimeImage}
        />
        <View>
          <Text
            style={[
              chooseshippingStyle.chooseaddressTitle,
              { color: colors.colors.text },
            ]}
          >
            {item.label}
          </Text>
          <Text
            style={[
              chooseshippingStyle.chooseaddressDetails,
              { color: colors.colors.textAccent },
            ]}
          >
            {item.arrival}
          </Text>
        </View>
      </View>

      <View style={chooseshippingStyle.radioButtonContainer}>
        {selectedItem?.id === item.id && (
          <View style={chooseshippingStyle.selectedRadio} />
        )}
      </View>
    </Pressable>
  );
};

export default ChooseShipRenderItem;
