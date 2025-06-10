import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { useColors } from "../hooks/useColors";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { notificationstyle } from "../styles/NotificationStyle";
import NotificationCard from "../components/NotificationCard";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Data from "../utils/Data.json";
import Header from "../components/HeaderGlobal";

type NotificationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "notification"
>;

const Notification = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<NotificationNavigationProp>();

  const [notifications, setNotifications] = useState(() =>
    Data.notificationlist.map((item) => ({
      id: item.id,
      title: strings[item.title as keyof typeof strings] ?? item.title,
      subtitle: strings[item.subtitle as keyof typeof strings] ?? item.subtitle,
      time: strings[item.time as keyof typeof strings] ?? item.time,
      read: item.read,
      image: images[item.image as keyof typeof images],
    }))
  );

  const unreadCount = notifications.filter(
    (notification) => !notification.read
  ).length;

  const markAllAsRead = () => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) => ({ ...notification, read: true }))
    );
  };

  return (
    <View
      style={[
        notificationstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="notification" unreadCount={unreadCount} />


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={notificationstyle.daymarkreadContainer}>
          <Text
            style={[
              notificationstyle.dayText,
              { color: colors.colors.textAccent },
            ]}
          >
            {strings.today}
          </Text>
          <TouchableOpacity onPress={markAllAsRead}>
            <Text
              style={[
                notificationstyle.markasreadText,
                { color: colors.colors.iconColor },
              ]}
            >
              {strings.markallasread}
            </Text>
          </TouchableOpacity>
        </View>

        {notifications.slice(0, 3).map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            subtitle={notification.subtitle}
            time={notification.time}
            image={notification.image}
            isAltStyle={notification.read}
            backgroundColor={
              notification.read
                ? colors.colors.background
                : colors.colors.notificationColor
            }
          />
        ))}

        <View style={notificationstyle.daymarkreadContainer}>
          <Text
            style={[
              notificationstyle.dayText,
              { color: colors.colors.textAccent },
            ]}
          >
            {strings.yesterday}
          </Text>
          <TouchableOpacity onPress={markAllAsRead}>
            <Text
              style={[
                notificationstyle.markasreadText,
                { color: colors.colors.iconColor },
              ]}
            >
              {strings.markallasread}
            </Text>
          </TouchableOpacity>
        </View>

        {notifications.slice(3).map((notification) => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            subtitle={notification.subtitle}
            time={notification.time}
            image={notification.image}
            isAltStyle={notification.read}
            backgroundColor={
              notification.read
                ? colors.colors.background
                : colors.colors.notificationColor
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Notification;
