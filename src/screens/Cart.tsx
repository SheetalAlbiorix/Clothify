import React, { useState, useCallback, useMemo, useEffect } from "react";
import { View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { RootStackParamList } from "../../App";
import { useColors } from "../hooks/useColors";
import { useTheme } from "../themes/theme";
import { cartitemstyle } from "../styles/CartItemStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { CartHeader } from "../components/CartHeader";
import { NoCartItems } from "../components/NoCartItems";
import { CartItemComponent } from "../components/CartItem";
import { PromoCodeSection } from "../components/PromoCodeSection";
import { OrderSummary } from "../components/OrderSummary";
import { CheckoutButton } from "../components/CheckoutButton";
import { RemoveItemModal } from "../components/RemoveItemModal";
import { CouponSelector } from "../components/CouponSelector";
import { CartItemType } from "../types/types";
import { applyPromoLogic, removePromoLogic } from "../utils/CartUtils";
import Data from "../utils/Data.json";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type CartNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const initialCartItems: CartItemType[] = Data.cartItems.map((item) => ({
  id: item.id,
  name: strings[item.name as keyof typeof strings] || item.name,
  image: images[item.image as keyof typeof images],
  size: strings[item.size as keyof typeof strings] || item.size,
  price: item.price,
  quantity: item.quantity,
  originalPrice: item.originalPrice,
}));

const DELIVERY_FEE = 25;

const Cart = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<CartNavigationProp>();
  const [cartItems, setCartItems] = useState<CartItemType[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState<string>("");
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>("");
  const [deliveryFee, setDeliveryFee] = useState<number>(DELIVERY_FEE);
  const [discount, setDiscount] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<CartItemType | null>(null);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const subTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const totalCost = useMemo(() => {
    return subTotal + deliveryFee + discount;
  }, [subTotal, deliveryFee, discount]);

  const handleIncrementQuantity = useCallback((id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const handleDecrementQuantity = useCallback((id: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }, []);

  const showRemoveConfirmation = useCallback((item: CartItemType) => {
    setItemToRemove(item);
    setModalVisible(true);
  }, []);

  const confirmRemoveItem = useCallback(() => {
    if (itemToRemove) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== itemToRemove.id)
      );
      setModalVisible(false);
      setItemToRemove(null);
    }
  }, [itemToRemove]);

  const applyPromoCode = useCallback(() => {
    applyPromoLogic(
      promoCode,
      cartItems,
      setCartItems,
      setDeliveryFee,
      setDiscount,
      setAppliedPromoCode,
      () => alert(strings.invalidpromocode)
    );
    setPromoCode("");
  }, [promoCode, cartItems]);

  const removePromoCode = useCallback(() => {
    removePromoLogic(
      cartItems,
      setCartItems,
      () => setDeliveryFee(DELIVERY_FEE),
      () => setDiscount(0),
      () => setAppliedPromoCode("")
    );
  }, [cartItems]);

  if (!isConnected) {
    return (
      <View
        style={[
          cartitemstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <CartHeader onBack={() => navigation.goBack()} />
        <NoDataFound message={strings.noCartsFound} />
      </View>
    );
  }

  if (cartItems.length === 0) {
    return <NoCartItems onBack={() => navigation.goBack()} />;
  }

  return (
    <View
      style={[
        cartitemstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <CartHeader onBack={() => navigation.goBack()} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <CartItemComponent
            key={item.id}
            item={item}
            onIncrement={handleIncrementQuantity}
            onDecrement={handleDecrementQuantity}
            onRemove={showRemoveConfirmation}
          />
        ))}

        <PromoCodeSection
          promoCode={promoCode}
          appliedPromoCode={appliedPromoCode}
          onChangePromoCode={setPromoCode}
          onApplyPromoCode={applyPromoCode}
          onRemovePromoCode={removePromoCode}
        />

        <CouponSelector />

        <OrderSummary
          subTotal={subTotal}
          deliveryFee={deliveryFee}
          discount={discount}
          totalCost={totalCost}
        />

        <CheckoutButton />
      </ScrollView>

      <RemoveItemModal
        visible={modalVisible}
        item={itemToRemove}
        onClose={() => setModalVisible(false)}
        onConfirm={confirmRemoveItem}
      />
    </View>
  );
};

export default Cart;
