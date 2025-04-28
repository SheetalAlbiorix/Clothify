import React, { useState, useCallback, useMemo } from "react";
import { View, ScrollView, ImageSourcePropType } from "react-native";
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

interface CartItem {
  id: number;
  name: string;
  image: ImageSourcePropType;
  size: string;
  price: number;
  quantity: number;
  originalPrice: number;
}

type CartNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: strings.brownjacket,
    image: images.jacket1,
    size: strings.XL,
    price: 83.97,
    quantity: 1,
    originalPrice: 83.97,
  },
  {
    id: 2,
    name: strings.brownsuit,
    image: images.suit1,
    size: strings.M,
    price: 120,
    quantity: 1,
    originalPrice: 120,
  },
  {
    id: 3,
    name: strings.brownshirt,
    image: images.jacket2,
    size: strings.XL,
    price: 83.97,
    quantity: 1,
    originalPrice: 83.97,
  },
  {
    id: 4,
    name: strings.brownsuit,
    image: images.jacket3,
    size: strings.S,
    price: 160,
    quantity: 1,
    originalPrice: 160,
  },
  {
    id: 5,
    name: strings.brownsuit,
    image: images.jacket4,
    size: strings.L,
    price: 100,
    quantity: 1,
    originalPrice: 100,
  },
];

const DELIVERY_FEE = 25;
const PROMO_CODES = {
  FREEFORALL: strings.freeforall,
  FIRST100: strings.first100,
  HAPPYNEW500: strings.happynew500,
  WELCOME200: strings.welcome200,
  CASHBACK12: strings.cashback12,
};

const Cart = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<CartNavigationProp>();
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);
  const [promoCode, setPromoCode] = useState<string>("");
  const [appliedPromoCode, setAppliedPromoCode] = useState<string>("");
  const [deliveryFee, setDeliveryFee] = useState<number>(DELIVERY_FEE);
  const [discount, setDiscount] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<CartItem | null>(null);

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

  const showRemoveConfirmation = useCallback((item: CartItem) => {
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
    const code = promoCode.toUpperCase();

    if (code === PROMO_CODES.FREEFORALL) {
      setCartItems((prevItems) =>
        prevItems.map((item) => ({
          ...item,
          price: 0,
        }))
      );
      setDeliveryFee(0);
      setDiscount(0);
      setAppliedPromoCode(code);
    } else if (
      code === PROMO_CODES.FIRST100 ||
      code === PROMO_CODES.WELCOME200 ||
      code === PROMO_CODES.CASHBACK12
    ) {
      const itemCount = cartItems.length;
      if (itemCount > 0) {
        const discountPerItem = 100 / itemCount;
        setCartItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            price: Math.max(item.originalPrice - discountPerItem, 0),
          }))
        );
        setDiscount(-35);
        setAppliedPromoCode(code);
      }
    } else if (code === PROMO_CODES.HAPPYNEW500) {
      const itemCount = cartItems.length;
      if (itemCount > 0) {
        const discountPerItem = 500 / itemCount;
        setCartItems((prevItems) =>
          prevItems.map((item) => ({
            ...item,
            price: Math.max(item.originalPrice - discountPerItem, 0),
          }))
        );
        setDiscount(-35);
        setAppliedPromoCode(code);
      }
    } else {
      alert(strings.invalidpromocode);
    }
    setPromoCode("");
  }, [promoCode, cartItems.length]);

  const removePromoCode = useCallback(() => {
    setCartItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        price: item.originalPrice,
      }))
    );
    setDeliveryFee(DELIVERY_FEE);
    setDiscount(0);
    setAppliedPromoCode("");
  }, []);

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
