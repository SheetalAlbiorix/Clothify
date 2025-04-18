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

type NotificationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "notification"
>;

const Notification = () => {
  const colors = useColors();
  const navigation = useNavigation<NotificationNavigationProp>();

  const [notifications, setNotifications] = useState([
    { id: 1, title: "Order Shipped", subtitle: "Your order #13456 has been shipped.", time: "2 hr", read: false, image: images.shippingtruck },
    { id: 2, title: "Flash Sale Alert", subtitle: "Hurry! Prices are melting for the next 2 hours.", time: "3 hr", read: false, image: images.flashsale },
    { id: 3, title: "Product Review Request", subtitle: "Tell us what you think about your recent purchase!", time: "4 hr", read: false, image: images.star2 },
    { id: 4, title: "Order Shipped", subtitle: "Your order #13456 has been shipped.", time: "1 d", read: true, image: images.shippingtruck },
    { id: 5, title: "New PayPal Added", subtitle: "You successfully linked a new PayPal account.", time: "1 d", read: false, image: images.wallet },
    { id: 6, title: "Flash Sale Alert", subtitle: "Everything you love, now at steal-deals!", time: "1 d", read: false, image: images.flashsale },
    { id: 7, title: "Left items in your cart", subtitle: "Your cart misses you! Checkout now!", time: "1 d", read: true, image: images.cartIcon },
  ]);

  const unreadCount = notifications.filter(notification => !notification.read).length;

  const markAllAsRead = () => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notification => ({ ...notification, read: true }))
    );
  };

  return (
    <View style={[notificationstyle.container, { backgroundColor: colors.colors.background }]}>
      <View style={notificationstyle.headerContainer}>
        <TouchableOpacity style={notificationstyle.backButton} onPress={() => navigation.goBack()}>
          <Image source={images.leftarrow} style={notificationstyle.leftarrowImage} />
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

      {/* Notifications */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Section: Today */}
        <View style={notificationstyle.daymarkreadContainer}>
          <Text style={[notificationstyle.dayText, { color: colors.colors.textAccent }]}>
            {strings.today}
          </Text>
          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={[notificationstyle.markasreadText, { color: colors.colors.iconColor }]}>
              {strings.markallasread}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Today's Notifications */}
        {notifications.slice(0, 3).map(notification => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            subtitle={notification.subtitle}
            time={notification.time}
            image={notification.image}
            isAltStyle={notification.read}
            backgroundColor={notification.read ? colors.colors.background : colors.colors.notificationColor}
          />
        ))}

        {/* Section: Yesterday */}
        <View style={notificationstyle.daymarkreadContainer}>
          <Text style={[notificationstyle.dayText, { color: colors.colors.textAccent }]}>
            {strings.yesterday}
          </Text>
          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={[notificationstyle.markasreadText, { color: colors.colors.iconColor }]}>
              {strings.markallasread}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Yesterday's Notifications */}
        {notifications.slice(3).map(notification => (
          <NotificationCard
            key={notification.id}
            title={notification.title}
            subtitle={notification.subtitle}
            time={notification.time}
            image={notification.image}
            isAltStyle={notification.read}
            backgroundColor={notification.read ? colors.colors.background : colors.colors.notificationColor}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Notification;
