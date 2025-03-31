import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View, Image, StyleSheet, ImageStyle } from "react-native";
import HomeScreen from "../screens/Home";
import { Colors } from "../utils/Colors";
import { Fonts } from "../components/fonts";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { borderStyles, layout, shadowStyles, Spacing } from "../components/layout";

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
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
            case strings.Favorites:
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
      <Tab.Screen name={strings.Home} component={HomeScreen} />
      <Tab.Screen name={strings.Bag} component={HomeScreen} />
      <Tab.Screen name={strings.Favorites} component={HomeScreen} />
      <Tab.Screen name={strings.Message} component={HomeScreen} />
      <Tab.Screen name={strings.UserProfile} component={HomeScreen} />
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
    ...Spacing.marginBottom_25
  },
  icon: {
    ...layout.customSmallWidth,
    ...layout.customSmallHeight,
    tintColor: Colors.lightgrey,
  }as ImageStyle,
});

export default TabBar;
