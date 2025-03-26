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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
