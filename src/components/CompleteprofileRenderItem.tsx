import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { compProfileStyle } from "../styles/CompProfileStyle";
import { CompleteProfileRenderItemProps } from "../types/types";

const CompleteProfileRenderItem: React.FC<CompleteProfileRenderItemProps> = ({
  item,
  onSelect,
}) => {
  return (
    <TouchableOpacity
      style={compProfileStyle.modalItem}
      onPress={() => onSelect(item)}
    >
      <Text style={compProfileStyle.modalText}>{item}</Text>
    </TouchableOpacity>
  );
};

export default CompleteProfileRenderItem;
