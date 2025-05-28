import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SearchProvider } from "./src/hooks/searchContext";
import { getFcmToken } from "./src/service/messagingToken";
import { setupFCMListeners } from "./src/service/notificationListeners";
import * as Screens from "./src/screens";
import { auth } from "./src/service/auth";
import { UserProvider } from "./src/hooks/userContext";
import { ActiveOrder, OrderItem } from "./src/screens/MyOrders";
import { SavedCardType } from "./src/screens/PaymentMethod";
import { AddressType } from "./src/screens/ShippingAddress";
import { ArrivalType } from "./src/screens/ChooseShipping";
import { LogBox } from "react-native";

export type RootStackParamList = {
  Splash: undefined;
  Welcome: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
  Verify: { otp: string; email: string };
  NewPass: undefined;
  CompleteProfile: undefined;
  AllowLocation: undefined;
  Home: { location: string };
  Tab: { name?: string; location: string };
  productDetail: undefined;
  whistlist: undefined;
  Cart: { appliedCoupon: string };
  Checkout: { selectedAddress?: AddressType; selectedArrival?: ArrivalType };
  ShippingAddress: undefined;
  ChooseShipping: undefined;
  PaymentMethod: {
    newCard?: SavedCardType;
    selectedAddress?: { label: string; address: string };
    selectedArrival?: { label: string; arrival: string };
  };
  AddCard: undefined;
  Payment: undefined;
  Coupons: undefined;
  Search: undefined;
  CouponCard: undefined;
  Filter: undefined;
  SearchScreen: { name: string };
  MyOrders: undefined;
  TrackOrder: { orderId: string; orderData: OrderItem };
  LeaveReview: { orderId: string; orderData: OrderItem };
  Chat: undefined;
  Profile: undefined;
  settings: undefined;
  passwordmanager: undefined;
  helpcenter: undefined;
  privacy: undefined;
  invite: undefined;
  notification: undefined;
  LocationMain: { fromHome?: boolean };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [initializing, setInitializing] = useState(true);

  LogBox.ignoreLogs(['Open debugger to view warnings']);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) setInitializing(false);
    });

    getFcmToken();
    setupFCMListeners();

    return () => {
      unsubscribe();
    };
  }, [initializing]);

  if (initializing) {
    return null;
  }

  const authScreens = [
    { name: "Splash", component: Screens.Splash },
    { name: "Welcome", component: Screens.Welcome },
    { name: "Onboarding", component: Screens.Onboarding },
    { name: "SignIn", component: Screens.SignIn },
    { name: "SignUp", component: Screens.SignUp },
    { name: "Verify", component: Screens.Verify },
    { name: "NewPass", component: Screens.NewPassword },
    { name: "passwordmanager", component: Screens.PasswordManager },
  ];

  const mainScreens = [
    { name: "CompleteProfile", component: Screens.CompleteProfile },
    { name: "AllowLocation", component: Screens.AllowLocation },
    { name: "LocationMain", component: Screens.LocationMain },
    { name: "Home", component: Screens.HomeScreen },
    { name: "productDetail", component: Screens.ProductDetail },
    { name: "Tab", component: Screens.TabBar },
    { name: "whistlist", component: Screens.Whistlist },
    { name: "Cart", component: Screens.Cart },
    { name: "Checkout", component: Screens.Checkout },
    { name: "ShippingAddress", component: Screens.ShippingAddress },
    { name: "ChooseShipping", component: Screens.ChooseShipping },
    { name: "PaymentMethod", component: Screens.PaymentMethod },
    { name: "AddCard", component: Screens.AddCard },
    { name: "Payment", component: Screens.Payment },
    { name: "Coupons", component: Screens.Coupons },
    { name: "Search", component: Screens.Search },
    { name: "Filter", component: Screens.Filter },
    { name: "SearchScreen", component: Screens.SearchScreen },
    { name: "settings", component: Screens.Settings },
    { name: "helpcenter", component: Screens.HelpCenter },
    { name: "privacy", component: Screens.PrivacyPolicy },
    { name: "invite", component: Screens.InviteFriends },
    { name: "notification", component: Screens.Notification },
  ];

  const orderScreens = [
    { name: "MyOrders", component: Screens.MyOrders },
    { name: "LeaveReview", component: Screens.LeaveReview },
    { name: "TrackOrder", component: Screens.TrackOrder },
  ];

  const chatScreens = [
    { name: "Chat", component: Screens.ChatScreen },
    { name: "Profile", component: Screens.ProfileScreen },
  ];

  return (
    <SearchProvider>
      <NavigationContainer>
        <UserProvider>
          <Stack.Navigator
            initialRouteName={user ? "Tab" : "Splash"}
            screenOptions={{ headerShown: false }}
          >
            {[...authScreens, ...mainScreens, ...orderScreens, ...chatScreens].map((screen) => {
              const screenName = screen.name as keyof RootStackParamList;
              return (
                <Stack.Screen
                  key={screenName}
                  name={screenName as any}
                  component={screen.component}
                />
              );
            })}
          </Stack.Navigator>
        </UserProvider>
      </NavigationContainer>
    </SearchProvider>
  );
};

export default App;
