import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Image, StyleSheet, ImageStyle } from "react-native";
import HomeScreen from "../screens/Home";
import { Colors } from "../utils/Colors";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import {
  borderStyles,
  layout,
  shadowStyles,
  Spacing,
} from "../components/layout";
import Whistlist from "../screens/Whistlist";
import CartItem from "../screens/Cart";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackScreenProps } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

type TabBarProps = StackScreenProps<RootStackParamList, "Tab">;

const TabBar = ({ route }: TabBarProps) => {
  const location = route.params?.location;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle:
          route.name === strings.Message ? { display: "none" } : styles.tabBar,
        tabBarActiveTintColor: Colors.white,
        tabBarInactiveTintColor: Colors.gray,
        tabBarIcon: ({ focused }) => {
          let iconSource;

          switch (route.name) {
            case strings.Home:
              iconSource = images.homeIcon;
              break;
            case strings.Bag:
              iconSource = images.bagIcon;
              break;
            case strings.Whistlist:
              iconSource = images.heartIcon;
              break;
            case strings.Message:
              iconSource = images.messageIcon;
              break;
            case strings.UserProfile:
              iconSource = images.profileIcon;
              break;
          }

          return (
            <View
              style={[styles.iconWrapper, focused && styles.activeIconWrapper]}
            >
              <Image
                source={iconSource}
                style={[
                  styles.icon,
                  {
                    tintColor: focused ? Colors.darkChoclate : Colors.lightgrey,
                  },
                ]}
                resizeMode="contain"
              />
            </View>
          );
        },
      })}
    >
      <Tab.Screen
        name={strings.Home}
        component={HomeScreen}
        initialParams={{ location }}
      />
      <Tab.Screen name={strings.Bag} component={CartItem} />
      <Tab.Screen name={strings.Whistlist} component={Whistlist} />
      <Tab.Screen name={strings.Message} component={ChatScreen} />
      <Tab.Screen name={strings.UserProfile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    ...layout.absolute,
    ...layout.bottom20,
    ...layout.height_80,
    backgroundColor: Colors.darkChoclate,
    ...borderStyles.rounded_40,
    ...layout.row,
    ...layout.itemsCenter,
    ...layout.justifyAround,
    ...shadowStyles.tabBarsmall,
    ...layout.z1,
    ...Spacing.marginHorizontal_20,
  },
  iconWrapper: {
    ...layout.width_small,
    ...layout.height_small,
    ...layout.itemsCenter,
  },
  activeIconWrapper: {
    backgroundColor: Colors.white,
    ...borderStyles.rounded_30,
    ...layout.width_medsmall,
    ...layout.height_medsmall,
    ...layout.itemsCenter,
    ...layout.justifyCenter,
    ...Spacing.marginBottom_25,
  },
  icon: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    tintColor: Colors.lightgrey,
    ...layout.resizeContain,
  } as ImageStyle,
});

export default TabBar;
