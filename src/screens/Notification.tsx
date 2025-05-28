import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
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

type NotificationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "notification"
>;

const Notification = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<NotificationNavigationProp>();

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: strings.ordershipped,
      subtitle: strings.yourorderhasbeenshipped,
      time: strings.hour2,
      read: false,
      image: images.shippingtruck,
    },
    {
      id: 2,
      title: strings.flashsalealert,
      subtitle: strings.hurrypricesmelting2hours,
      time: strings.hour3,
      read: false,
      image: images.flashsale,
    },
    {
      id: 3,
      title: strings.productreviewrequest,
      subtitle: strings.tellusaboutrecentpurchase,
      time: strings.hour4,
      read: false,
      image: images.star2,
    },
    {
      id: 4,
      title: strings.ordershipped,
      subtitle: strings.yourorderhasbeenshipped,
      time: strings.d1,
      read: true,
      image: images.shippingtruck,
    },
    {
      id: 5,
      title: strings.newpaypaladded,
      subtitle: strings.succeslinkpaypal,
      time: strings.d1,
      read: false,
      image: images.wallet,
    },
    {
      id: 6,
      title: strings.flashsalealert,
      subtitle: strings.stealdealyoulove,
      time: strings.d1,
      read: false,
      image: images.flashsale,
    },
    {
      id: 7,
      title: strings.leftiteminyourcart,
      subtitle: strings.cartmissesyou,
      time: strings.d1,
      read: true,
      image: images.cartIcon,
    },
  ]);

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
      <View style={notificationstyle.headerContainer}>
        <TouchableOpacity
          style={notificationstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={notificationstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[notificationstyle.header, { color: colors.colors.text }]}>
          {strings.notification}
        </Text>
        <TouchableOpacity style={notificationstyle.new2container}>
          <Text style={notificationstyle.new2Text}>
            {unreadCount > 0 ? `${unreadCount} new` : 0}
          </Text>
        </TouchableOpacity>
      </View>

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
