import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";
import { CartItemProps } from "../types/types";

export const CartItemComponent = React.memo(
  ({ item, onIncrement, onDecrement, onRemove }: CartItemProps) => {
    const colors = useColors();

    return (
      <View key={item.id} style={cartitemstyle.cartItem}>
        <Image source={item.image} style={cartitemstyle.itemImage} />

        <View style={cartitemstyle.itemDetails}>
          <Text style={[cartitemstyle.itemName, { color: colors.colors.text }]}>
            {item.name}
          </Text>
          <Text style={[cartitemstyle.itemSize, { color: colors.colors.text }]}>
            {strings.size} {item.size}
          </Text>
          <Text
            style={[cartitemstyle.itemPrice, { color: colors.colors.text }]}
          >
            ${item.price.toFixed(2)}
            {item.price < item.originalPrice && (
              <Text style={cartitemstyle.originalPrice}>
                {" "}
                ${item.originalPrice.toFixed(2)}
              </Text>
            )}
          </Text>
        </View>

        <View style={cartitemstyle.quantityControls}>
          <TouchableOpacity
            style={cartitemstyle.quantityButton}
            onPress={() => onDecrement(item.id)}
          >
            <Text style={cartitemstyle.quantityButtonText}>
              {strings.minus}
            </Text>
          </TouchableOpacity>

          <Text
            style={[cartitemstyle.quantityText, { color: colors.colors.text }]}
          >
            {item.quantity}
          </Text>

          <TouchableOpacity
            style={cartitemstyle.quantityButton}
            onPress={() => onIncrement(item.id)}
          >
            <Text style={cartitemstyle.quantityButtonText}>{strings.plus}</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={cartitemstyle.deleteButton}
          onPress={() => onRemove(item)}
        >
          <Text style={cartitemstyle.deleteButtonText}>
            {strings.deleteIcon}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
);
