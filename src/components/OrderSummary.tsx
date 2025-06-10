import React from "react";
import { View, Text } from "react-native";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useColors } from "../hooks/useColors";
import { OrderSummaryProps } from "../types/types";

export const OrderSummary = React.memo(
  ({ subTotal, deliveryFee, discount, totalCost }: OrderSummaryProps) => {
    const colors = useColors();

    return (
      <View style={cartitemstyle.summary}>
        <View style={cartitemstyle.summaryRow}>
          <Text
            style={[cartitemstyle.summaryLabel, { color: colors.colors.text }]}
          >
            {strings.subtotal}
          </Text>
          <Text
            style={[cartitemstyle.summaryValue, { color: colors.colors.text }]}
          >
            ${subTotal.toFixed(2)}
          </Text>
        </View>

        <View style={cartitemstyle.summaryRow}>
          <Text
            style={[cartitemstyle.summaryLabel, { color: colors.colors.text }]}
          >
            {strings.deliveryfee}
          </Text>
          <Text
            style={[cartitemstyle.summaryValue, { color: colors.colors.text }]}
          >
            ${deliveryFee.toFixed(2)}
          </Text>
        </View>

        {discount !== 0 && (
          <View style={cartitemstyle.summaryRow}>
            <Text
              style={[
                cartitemstyle.summaryLabel,
                { color: colors.colors.text },
              ]}
            >
              {strings.discount}
            </Text>
            <Text
              style={[
                cartitemstyle.summaryValue,
                { color: colors.colors.text },
              ]}
            >
              ${discount.toFixed(2)}
            </Text>
          </View>
        )}

        <View style={[cartitemstyle.summaryRow, cartitemstyle.totalRow]}>
          <Text
            style={[cartitemstyle.totalLabel, { color: colors.colors.text }]}
          >
            {strings.totalcost}
          </Text>
          <Text
            style={[cartitemstyle.totalValue, { color: colors.colors.text }]}
          >
            ${totalCost.toFixed(2)}
          </Text>
        </View>
      </View>
    );
  }
);
