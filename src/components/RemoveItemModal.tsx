import React from "react";
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";

interface RemoveItemModalProps {
  visible: boolean;
  item: {
    id: number;
    name: string;
    image: ImageSourcePropType;
    size: string;
    price: number;
    quantity: number;
    originalPrice: number;
  } | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const RemoveItemModal = React.memo(
  ({ visible, item, onClose, onConfirm }: RemoveItemModalProps) => {
    const colors = useColors();

    if (!item) return null;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={cartitemstyle.modalOverlay}>
          <View
            style={[
              cartitemstyle.modalContent,
              { backgroundColor: colors.colors.background },
            ]}
          >
            <Text
              style={[cartitemstyle.modalTitle, { color: colors.colors.text }]}
            >
              {strings.removefromcart}
            </Text>

            {item && (
              <View style={cartitemstyle.modalItem}>
                <Image
                  source={item.image}
                  style={cartitemstyle.modalItemImage}
                />
                <View style={cartitemstyle.modalItemDetails}>
                  <Text
                    style={[
                      cartitemstyle.modalItemName,
                      { color: colors.colors.text },
                    ]}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={[
                      cartitemstyle.modalItemSize,
                      { color: colors.colors.text },
                    ]}
                  >
                    {strings.size} {item.size}
                  </Text>
                  <Text
                    style={[
                      cartitemstyle.modalItemPrice,
                      { color: colors.colors.text },
                    ]}
                  >
                    ${item.price.toFixed(2)}
                  </Text>
                </View>
                <View style={cartitemstyle.modalQuantity}>
                  <TouchableOpacity style={cartitemstyle.quantityButton}>
                    <Text style={cartitemstyle.quantityButtonText}>
                      {strings.minus}
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={[
                      cartitemstyle.quantityText,
                      { color: colors.colors.text },
                    ]}
                  >
                    {item.quantity}
                  </Text>
                  <TouchableOpacity style={cartitemstyle.quantityButton}>
                    <Text style={cartitemstyle.quantityButtonText}>
                      {strings.plus}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            <View style={cartitemstyle.modalActions}>
              <TouchableOpacity
                style={cartitemstyle.cancelButton}
                onPress={onClose}
              >
                <Text style={cartitemstyle.cancelButtonText}>
                  {strings.cancel}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={cartitemstyle.confirmButton}
                onPress={onConfirm}
              >
                <Text style={cartitemstyle.confirmButtonText}>
                  {strings.yesremove}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
);
