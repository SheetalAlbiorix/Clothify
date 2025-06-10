import { CartItemType } from "../types/types";
import { strings } from "./strings";

export const PROMO_DISCOUNTS = {
  FREEFORALL: strings.freeforall,
   FIRST100: strings.first100,
   HAPPYNEW500: strings.happynew500,
   WELCOME200: strings.welcome200,
   CASHBACK12: strings.cashback12,
};

export const applyPromoLogic = (
  code: string,
  cartItems: CartItemType[],
  setCartItems: (items: CartItemType[]) => void,
  setDeliveryFee: (fee: number) => void,
  setDiscount: (amount: number) => void,
  setAppliedPromoCode: (code: string) => void,
  onInvalid?: () => void
) => {
  const upperCode = code.toUpperCase();
  const itemCount = cartItems.length;

  if (upperCode === PROMO_DISCOUNTS.FREEFORALL) {
    setCartItems(cartItems.map((item) => ({ ...item, price: 0 })));
    setDeliveryFee(0);
    setDiscount(0);
    setAppliedPromoCode(upperCode);
  } else if (
    [PROMO_DISCOUNTS.FIRST100, PROMO_DISCOUNTS.WELCOME200, PROMO_DISCOUNTS.CASHBACK12].includes(
      upperCode
    )
  ) {
    if (itemCount > 0) {
      const discountPerItem = 100 / itemCount;
      setCartItems(
        cartItems.map((item) => ({
          ...item,
          price: Math.max(item.originalPrice - discountPerItem, 0),
        }))
      );
      setDiscount(-35);
      setAppliedPromoCode(upperCode);
    }
  } else if (upperCode === PROMO_DISCOUNTS.HAPPYNEW500) {
    if (itemCount > 0) {
      const discountPerItem = 500 / itemCount;
      setCartItems(
        cartItems.map((item) => ({
          ...item,
          price: Math.max(item.originalPrice - discountPerItem, 0),
        }))
      );
      setDiscount(-35);
      setAppliedPromoCode(upperCode);
    }
  } else {
    if (onInvalid) onInvalid();
  }
};

export const removePromoLogic = (
  cartItems: CartItemType[],
  setCartItems: (items: CartItemType[]) => void,
  resetDeliveryFee: () => void,
  resetDiscount: () => void,
  resetPromoCode: () => void
) => {
  setCartItems(
    cartItems.map((item) => ({
      ...item,
      price: item.originalPrice,
    }))
  );
  resetDeliveryFee();
  resetDiscount();
  resetPromoCode();
};
