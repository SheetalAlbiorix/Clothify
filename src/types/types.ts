import { Timestamp } from "firebase/firestore";
import { ImageSourcePropType, StyleProp, TextInput, TextInputProps, ViewStyle } from "react-native";
import { Buffer } from "buffer";
import Swiper from "react-native-swiper";
import { useColors } from "../hooks/useColors";
import React from "react";

export type CartItemType = {
  id: number;
  name: string;
  image: ImageSourcePropType;
  size: string;
  price: number;
  quantity: number;
  originalPrice: number;
};

export interface Message {
  id: string;
  type: "text" | "image" | "audio";
  senderName: string;
  sender: string;
  photoUrl?: string;
  content?: string;
  time: string;
  isMe: boolean;
  createdAt?: Timestamp;
}

export type ArrivalType = {
  id: string;
  label: string;
  arrival: string;
};

export type OrderDataType = {
  id: string;
  name: string;
  size: string;
  qty: number;
  price: number;
  image: any;
};

export type RouteParams = {
  LeaveReview: {
    orderData: OrderDataType;
  };
  TrackOrder: {
    orderData: OrderDataType;
  };
};

export type CancelledOrder = {
  id: string;
  name: string;
  size: string;
  qty?: string;
  price: number;
  image: any;
};

export type CompletedOrder = {
  id: string;
  name: string;
  size: string;
  qty?: string;
  price: number;
  image: any;
};

export type ActiveOrder = {
  id: string;
  name: string;
  size: string;
  qty?: string;
  price: number;
  image: any;
};

export type OrderItem = {
  id: string;
  name: string;
  size: string;
  qty?: string;
  price: number;
  image: any;
};

export type RootStackParamList = {
  CompleteProfile: undefined;
};

export type SplashRootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignIn: undefined;
  Tab: undefined;
};

export type SavedCardType = {
  cardNumber: string;
  expiryDate: string;
  cardHolderName: string;
  cvv: string;
  type: string | null;
};

if (typeof global.Buffer === "undefined") {
  global.Buffer = Buffer;
}

export type AddressType = {
  id: string;
  label: string;
  address: string;
};

export type BrandFilterProps = {
  selected: string;
  onSelect: (value: string) => void;
};

export interface CardPreviewProps {
  cardType: string | null;
  cardNumber: string;
  cardHolderName: string;
  expiryDate: string;
}

export interface CartHeaderProps {
  onBack: () => void;
}

export interface CartItemProps {
  item: {
    id: number;
    name: string;
    image: ImageSourcePropType;
    size: string;
    price: number;
    quantity: number;
    originalPrice: number;
  };
  onIncrement: (id: number) => void;
  onDecrement: (id: number) => void;
  onRemove: (item: CartItemProps["item"]) => void;
}

export interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

export interface CustomCheckboxProps {
  checked: boolean;
  onToggle: () => void;
}

export interface ContactItemProps {
  id: string;
  title: string;
  icon: any;
  phone?: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}

export type CouponCardProps = {
  code: string;
  amountNeeded: string;
  discount: string;
  onApplyCoupon?: (code: string) => void;
};

export interface ErrorMessageProps {
  message: string;
}

export interface FaqItemProps {
  id: string;
  question: string;
  answer: string;
  expanded: boolean;
  onToggle: (id: string) => void;
}

export type GenderFilterProps = {
  selected: string;
  onSelect: (value: string) => void;
};

export interface InputFieldProps extends TextInputProps {
  label: string;
  style?: StyleProp<ViewStyle>;
}

export type inviteProps = {
  name: string;
  number: string;
  images: any;
  colors: any;
}

export interface CheckboxLabelProps {
  checked: boolean;
  label: string;
  onPress: () => void;
}

export type LeaveFooterButtonsProps = {
  onCancel: () => void;
  onSubmit: () => void;
};

export interface MediaPickerModalProps {
    visible: boolean;
    onClose: () => void;
    onMediaSelected: (uri: string, type: string) => void;
}

export type MediaPickerSectionProps = {
    mediaUri: string | null;
    onPress: () => void;
};

export interface NavigationButtonsProps {
  swiperRef: React.RefObject<Swiper>;
  slides: { id: number; image: any; text: string; text2: string }[];
  activeIndex: number;
}

export interface NoCartItemsProps {
  onBack: () => void;
}

export type Props = {
  title: string;
  subtitle: string;
  time: string;
  image: any;
  isAltStyle?: boolean;
  backgroundColor?: string;
};

export interface OnboardingSwiperProps {
  swiperRef: React.RefObject<Swiper>;
  slides: { id: number; image: any; text: string; text2: string }[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  navigation: any;
}

export interface OrderStatus {
  title: string;
  date: string;
  completed: boolean;
  icon: JSX.Element;
}

export interface OrderSummaryProps {
  subTotal: number;
  deliveryFee: number;
  discount: number;
  totalCost: number;
}

export interface PasswordInputProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  secureTextEntry: boolean;
  toggleSecureTextEntry: () => void;
  placeholder: string;
  placeholderTextColor: string;
}

export interface PasswordSubmitButtonProps {
  isEnabled: boolean;
  onPress: () => void;
  buttonText: string;
  backgroundColor: string;
}

export type PricingRangeProps = {
  value: number[];
  onChange: (value: number[]) => void;
};

export type ProductDetaillInfoProps = {
  name: string;
  price: string;
  rating: number;
};

export type ProductInfoProps = {
  name: string;
  size: string;
  qty: number;
  price: number;
  image: any;
};

export type ProfileOptions = {
  icon: any;
  text: string;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}

export interface PromoCodeSectionProps {
  promoCode: string;
  appliedPromoCode: string;
  onChangePromoCode: (code: string) => void;
  onApplyPromoCode: () => void;
  onRemovePromoCode: () => void;
}

export interface RemoveItemModalProps {
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

export type ReviewInputProps = {
  reviewText: string;
  onChangeText: (text: string) => void;
};

export type SortByFilterProps = {
  selected: string;
  onSelect: (value: string) => void;
};

export type StarRatingProps = {
  rating: number;
  onRatingChange: (rating: number) => void;
};

export interface TabsHelpProps {
  activeTab: string;
  tabs: { key: string; label: string }[];
  onTabSelect: (key: string) => void;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  expanded: boolean;
}

export interface ContactItem {
  id: string;
  title: string;
  icon: any;
  phone?: string;
  expanded: boolean;
}

export type handleChangeProps = {
  text: string,
  index: number,
  otp: string[],
  setOtp: (val: string[]) => void,
  inputRefs: React.RefObject<Array<TextInput | null>>,
  handleVerify: (val: string) => void
}

export type handleKeyPressProps = {
  e: any,
  index: number,
  otp: string[],
  inputRefs: React.RefObject<Array<TextInput | null>>
}