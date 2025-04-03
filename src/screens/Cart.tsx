import React, { useState, useCallback, useMemo } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  SafeAreaView,
  ImageSourcePropType,
} from "react-native";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { cartitemstyle } from "../styles/CartItemStyle";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { Colors } from "../utils/Colors";

interface CartItem {
  id: number;
  name: string;
  image: ImageSourcePropType;
  size: string;
  price: number;
  quantity: number;
  originalPrice: number;
}

interface NavigationProps {
  goBack: () => void;
}

interface CartProps {
  navigation: NavigationProps;
}

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
};

type CartNavigationProp = StackNavigationProp<RootStackParamList, "Cart">;

const Cart = () => {
  const colors = useColors();
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
    } else if (code === PROMO_CODES.FIRST100) {
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
      alert("Invalid promo code");
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
    return (
      <SafeAreaView
        style={[
          cartitemstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <View
          style={[
            cartitemstyle.headerContainer,
            { backgroundColor: colors.colors.background },
          ]}
        >
          <TouchableOpacity
            style={cartitemstyle.backButton}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={images.leftarrow}
              style={cartitemstyle.leftarrowImage}
            />
          </TouchableOpacity>
          <Text style={[cartitemstyle.header, { color: colors.colors.text }]}>
            {strings.mycart}
          </Text>
        </View>
        <View style={cartitemstyle.emptyCartContainer}>
          <Text
            style={[cartitemstyle.emptyCartText, { color: colors.colors.text }]}
          >
            {strings.yourcartempty}
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View
      style={[
        cartitemstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={cartitemstyle.headerContainer}>
        <TouchableOpacity
          style={cartitemstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={cartitemstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[cartitemstyle.header, { color: colors.colors.text }]}>
          {strings.mycart}
        </Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {cartItems.map((item) => (
          <View key={item.id} style={cartitemstyle.cartItem}>
            <Image source={item.image} style={cartitemstyle.itemImage} />

            <View style={cartitemstyle.itemDetails}>
              <Text
                style={[cartitemstyle.itemName, { color: colors.colors.text }]}
              >
                {item.name}
              </Text>
              <Text
                style={[cartitemstyle.itemSize, { color: colors.colors.text }]}
              >
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
                onPress={() => handleDecrementQuantity(item.id)}
              >
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

              <TouchableOpacity
                style={cartitemstyle.quantityButton}
                onPress={() => handleIncrementQuantity(item.id)}
              >
                <Text style={cartitemstyle.quantityButtonText}>
                  {strings.plus}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={cartitemstyle.deleteButton}
              onPress={() => showRemoveConfirmation(item)}
            >
              <Text style={cartitemstyle.deleteButtonText}>🗑️</Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={cartitemstyle.promoContainer}>
          {appliedPromoCode ? (
            <View style={cartitemstyle.appliedPromoContainer}>
              <Text style={cartitemstyle.appliedPromoText}>
                {appliedPromoCode}
              </Text>
              <TouchableOpacity
                onPress={removePromoCode}
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
                onChangeText={setPromoCode}
              />
              <TouchableOpacity
                style={[
                  cartitemstyle.applyButton,
                  !promoCode.trim() && { opacity: 0.7 },
                ]}
                onPress={applyPromoCode}
                disabled={!promoCode.trim()}
              >
                <Text style={cartitemstyle.applyButtonText}>
                  {strings.apply}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={cartitemstyle.couponselectContainer}>
          <Text
            style={[
              cartitemstyle.couponvalidorpromo,
              { color: colors.colors.text },
            ]}
          >
            {strings.haveavalidcoupon}
          </Text>
          <TouchableOpacity
            style={cartitemstyle.couponButton}
            onPress={() => navigation.navigate("Coupons")}
          >
            <Text style={cartitemstyle.seeallcouponText}>{strings.seeallcoupons}</Text>
            <Image
              source={images.arrowright}
              style={[
                cartitemstyle.arrowrightImage,
                { tintColor: colors.colors.tintColor },
              ]}
            />
          </TouchableOpacity>
        </View>

        <View style={cartitemstyle.summary}>
          <View style={cartitemstyle.summaryRow}>
            <Text
              style={[
                cartitemstyle.summaryLabel,
                { color: colors.colors.text },
              ]}
            >
              {strings.subtotal}
            </Text>
            <Text
              style={[
                cartitemstyle.summaryValue,
                { color: colors.colors.text },
              ]}
            >
              ${subTotal.toFixed(2)}
            </Text>
          </View>

          <View style={cartitemstyle.summaryRow}>
            <Text
              style={[
                cartitemstyle.summaryLabel,
                { color: colors.colors.text },
              ]}
            >
              {strings.deliveryfee}
            </Text>
            <Text
              style={[
                cartitemstyle.summaryValue,
                { color: colors.colors.text },
              ]}
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
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
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

            {itemToRemove && (
              <View style={cartitemstyle.modalItem}>
                <Image
                  source={itemToRemove.image}
                  style={cartitemstyle.modalItemImage}
                />
                <View style={cartitemstyle.modalItemDetails}>
                  <Text
                    style={[
                      cartitemstyle.modalItemName,
                      { color: colors.colors.text },
                    ]}
                  >
                    {itemToRemove.name}
                  </Text>
                  <Text
                    style={[
                      cartitemstyle.modalItemSize,
                      { color: colors.colors.text },
                    ]}
                  >
                    Size : {itemToRemove.size}
                  </Text>
                  <Text
                    style={[
                      cartitemstyle.modalItemPrice,
                      { color: colors.colors.text },
                    ]}
                  >
                    ${itemToRemove.price.toFixed(2)}
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
                    {itemToRemove.quantity}
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
                onPress={() => setModalVisible(false)}
              >
                <Text style={cartitemstyle.cancelButtonText}>{strings.cancel}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={cartitemstyle.confirmButton}
                onPress={confirmRemoveItem}
              >
                <Text style={cartitemstyle.confirmButtonText}>{strings.yesremove}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cart;
