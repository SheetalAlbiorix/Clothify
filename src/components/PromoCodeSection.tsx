import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";
import { Colors } from "../utils/Colors";

interface PromoCodeSectionProps {
  promoCode: string;
  appliedPromoCode: string;
  onChangePromoCode: (code: string) => void;
  onApplyPromoCode: () => void;
  onRemovePromoCode: () => void;
}

export const PromoCodeSection = React.memo(({
  promoCode,
  appliedPromoCode,
  onChangePromoCode,
  onApplyPromoCode,
  onRemovePromoCode
}: PromoCodeSectionProps) => {
  const colors = useColors();
  
  return (
    <View style={cartitemstyle.promoContainer}>
      {appliedPromoCode ? (
        <View style={cartitemstyle.appliedPromoContainer}>
          <Text style={cartitemstyle.appliedPromoText}>
            {appliedPromoCode}
          </Text>
          <TouchableOpacity
            onPress={onRemovePromoCode}
            style={cartitemstyle.removePromoButton}
          >
            <Text style={cartitemstyle.removePromoButtonText}>{strings.cross}</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={cartitemstyle.promoInputContainer}>
          <TextInput
            style={[
              cartitemstyle.promoInput,
              { color: colors.colors.text },
            ]}
            placeholder={strings.promocode}
            placeholderTextColor={Colors.zetgrey}
            value={promoCode}
            onChangeText={onChangePromoCode}
          />
          <TouchableOpacity
            style={[
              cartitemstyle.applyButton,
              !promoCode.trim() && { opacity: 0.7 },
            ]}
            onPress={onApplyPromoCode}
            disabled={!promoCode.trim()}
          >
            <Text style={cartitemstyle.applyButtonText}>
              {strings.apply}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
});