import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { compProfileStyle } from "../styles/CompProfileStyle";

type CompleteProfileRenderItemProps = {
  item: string;
  onSelect: (value: string) => void;
};

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
