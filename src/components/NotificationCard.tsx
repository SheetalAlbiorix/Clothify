import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { notificationstyle } from "../styles/NotificationStyle";
import { useColors } from "../hooks/useColors";

type Props = {
  title: string;
  subtitle: string;
  time: string;
  image: any;
  isAltStyle?: boolean;
  backgroundColor?: string;
};

const NotificationCard = ({
  title,
  subtitle,
  time,
  image,
  isAltStyle,
  backgroundColor,
}: Props) => {
  const colors = useColors();

  return (
    <TouchableOpacity
      style={[
        isAltStyle
          ? notificationstyle.notification2container
          : notificationstyle.notificationcontainer,
        {
          backgroundColor: backgroundColor
            ? backgroundColor
            : isAltStyle
            ? colors.colors.notificationColor
            : colors.colors.background,
        },
      ]}
    >
      <View
        style={
          isAltStyle
            ? notificationstyle.notification2Item
            : notificationstyle.notificationItem
        }
      >
        <View
          style={
            isAltStyle
              ? notificationstyle.message2Container
              : notificationstyle.messageContainer
          }
        >
          <View
            style={
              isAltStyle
                ? notificationstyle.imagecontainer2
                : notificationstyle.imagecontainer
            }
          >
            <Image
              source={image}
              style={
                isAltStyle
                  ? notificationstyle.shippingtruckIcon2
                  : notificationstyle.shippingtruckIcon
              }
            />
          </View>
          <View
            style={
              isAltStyle
                ? notificationstyle.messageText2Container
                : notificationstyle.messageTextContainer
            }
          >
            <View
              style={
                isAltStyle
                  ? notificationstyle.shippedTime2Text
                  : notificationstyle.shippedTimeText
              }
            >
              <Text
                style={[
                  isAltStyle
                    ? notificationstyle.ordershipped2Text
                    : notificationstyle.ordershippedText,
                  { color: colors.colors.text },
                ]}
              >
                {title}
              </Text>
              <Text
                style={
                  isAltStyle
                    ? notificationstyle.timeText2
                    : notificationstyle.timeText
                }
              >
                {time}
              </Text>
            </View>
            <Text
              style={[
                isAltStyle
                  ? notificationstyle.yourorderpara2
                  : notificationstyle.yourorderpara,
                { color: colors.colors.text },
              ]}
            >
              {subtitle} 
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;
