import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { strings } from "../utils/strings";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type CheckoutNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

export const CheckoutButton = React.memo(() => {
  const navigation = useNavigation<CheckoutNavigationProp>();

  return (
    <TouchableOpacity
      style={cartitemstyle.checkoutButton}
      onPress={() =>
        navigation.navigate({
          name: "Checkout",
          params: {
            selectedAddress: undefined,
            selectedArrival: undefined,
          },
        })
      }
    >
      <Text style={cartitemstyle.checkoutButtonText}>
        {strings.proceedtocheckout}
      </Text>
    </TouchableOpacity>
  );
});
