import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import Welcome from "./src/screens/Welcome";
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";
import SignIn from "./src/screens/SignIn";
import SignUp from "./src/screens/SignUp";
import Verify from "./src/screens/Verify";
import NewPassword from "./src/screens/NewPassword";
import CompleteProfile from "./src/screens/CompleteProfile";
import AllowLocation from "./src/screens/AllowLocation";
import LocationMain from "./src/screens/LocationMain";
import HomeScreen from "./src/screens/Home";
import TabBar from "./src/navigation/TabBar";
import ProductDetail from "./src/screens/ProductDetail";
import Whistlist from "./src/screens/Whistlist";
import Cart from "./src/screens/Cart";
import Checkout from "./src/screens/Checkout";
import ShippingAddress, { AddressType } from "./src/screens/ShippingAddress";
import ChooseShipping, { ArrivalType } from "./src/screens/ChooseShipping";
import PaymentMethod, { SavedCardType } from "./src/screens/PaymentMethod";
import AddCard from "./src/screens/AddCard";
import Payment from "./src/screens/Payment";

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
  Verify: undefined;
  NewPass: undefined;
  CompleteProfile: undefined;
  AllowLocation: undefined;
  LocationMain: undefined;
  Home: { location: string };
  Tab: undefined;
  productDetail: undefined;
  whistlist: undefined;
  Cart: undefined;
  Checkout: { selectedAddress?: AddressType, selectedArrival?: ArrivalType };
  ShippingAddress: undefined;
  ChooseShipping: undefined;
  PaymentMethod: {  newCard?: SavedCardType;
    selectedAddress?: { label: string; address: string };
    selectedArrival?: { label: string; arrival: string }; };
  AddCard: undefined;
  Payment: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="NewPass" component={NewPassword} />
        <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
        <Stack.Screen name="AllowLocation" component={AllowLocation} />
        <Stack.Screen name="LocationMain" component={LocationMain} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="Tab" component={TabBar} />
        <Stack.Screen name="whistlist" component={Whistlist} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="ShippingAddress" component={ShippingAddress} />
        <Stack.Screen name="ChooseShipping" component={ChooseShipping} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="AddCard" component={AddCard} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
