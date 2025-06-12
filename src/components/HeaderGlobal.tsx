import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { useColors } from "../hooks/useColors";
import { addcardstyles } from "../styles/AddCardStyle";
import { homeStyles } from "../styles/HomeStyle";
import { chatstyle } from "../styles/ChatStyle";
import { checkoutstyle } from "../styles/CheckoutStyle";
import { chooseshippingStyle } from "../styles/ChooseShippingStyle";
import { couponsStyle } from "../styles/CouponsStyle";
import { filterstyle } from "../styles/FilterStyle";
import { invitestyle } from "../styles/inviteStyle";
import { leavereviewstyle } from "../styles/LeaveReviewStyle";
import { locationmainstyle } from "../styles/LocationMainStyle";
import { myorderstyles } from "../styles/MyOrdersStyle";
import { passmanagerstyle } from "../styles/PassManagerStyle";
import { paymentstyles } from "../styles/PaymentStyle";
import { paymentmethodstyle } from "../styles/PaymentMethodStyle";
import { privacystyle } from "../styles/PrivacypolicyStyle";
import { profilestyle } from "../styles/ProfileStyle";
import { settingsstyle } from "../styles/Settingsstyle";
import { shippingAddressStyle } from "../styles/ShippingAdressStyle";
import { trackorderstyle } from "../styles/TrackOrderStyle";
import { whistliststyle } from "../styles/WhistlistStyle";
import { notificationstyle } from "../styles/NotificationStyle";
import { HeaderProps } from "../types/types";

export const headerMap = {
  checkout: { style: checkoutstyle, title: strings.checkout },
  chooseshipping: { style: chooseshippingStyle, title: strings.chooseshipping },
  coupons: { style: couponsStyle, title: strings.coupon },
  filter: { style: filterstyle, title: strings.filter },
  invitefriends: { style: invitestyle, title: strings.invitefriends },
  leavereview: { style: leavereviewstyle, title: strings.leavereview },
  locationmain: { style: locationmainstyle, title: strings.enteryourlocation },
  myorders: { style: myorderstyles, title: strings.myorders },
  passwordmanager: { style: passmanagerstyle, title: strings.passwordmanager },
  payment: { style: paymentstyles, title: strings.payment },
  paymentmethod: { style: paymentmethodstyle, title: strings.paymentmethod },
  privacypolicy: { style: privacystyle, title: strings.privacypolicy },
  profilescreen: { style: profilestyle, title: strings.profile },
  settings: { style: settingsstyle, title: strings.Settings },
  shippingaddress: {
    style: shippingAddressStyle,
    title: strings.shippingaddress,
  },
  trackorder: { style: trackorderstyle, title: strings.trackorder },
  whistlist: { style: whistliststyle, title: strings.mywhistlist },
  notification: { style: notificationstyle, title: strings.notification },
} as const;

const Header: React.FC<HeaderProps> = ({
  type = "home",
  location = "Your Location",
  showLocation = false,
  showNotifications = false,
  unreadCount = 0,
  onLocationPress,
  onNotificationPress,
  showBackButton = false,
  onBackPress,
  title,
  otherUserPhotoUrl = null,
  otherUserName = null,
  onChatMenuPress,
  containerStyle,
  backButtonStyle,
  backButtonImageStyle,
  titleStyle,
}) => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const colors = useColors();

  const handleBackPress = onBackPress ?? (() => navigation.goBack());
  const handleNotificationPress =
    onNotificationPress ?? (() => navigation.navigate("notification"));
  const handleLocationPress =
    onLocationPress ??
    (() => navigation.navigate("LocationMain", { fromHome: true }));

  if (type === "chat") {
    return (
      <View style={[chatstyle.headerContainer, containerStyle]}>
        <View style={chatstyle.header}>
          <TouchableOpacity
            style={chatstyle.backButton}
            onPress={handleBackPress}
          >
            <Image source={images.leftarrow} style={chatstyle.leftarrowIcon} />
          </TouchableOpacity>
          <View style={chatstyle.headerTextContainer}>
            <Image
              source={
                otherUserPhotoUrl
                  ? { uri: `${otherUserPhotoUrl}?t=${new Date().getTime()}` }
                  : images.face1
              }
              style={chatstyle.avatar}
            />
            <View>
              <Text style={chatstyle.name}>{otherUserName}</Text>
              <Text style={chatstyle.status}>{strings.online}</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={chatstyle.menuButton}
          onPress={onChatMenuPress}
        >
          <Image source={images.threedots} style={chatstyle.leftarrowIcon} />
        </TouchableOpacity>
      </View>
    );
  }

  const renderBackHeader = (style: any, headerTitle: string) => (
    <View style={style.headerContainer}>
      <TouchableOpacity style={style.backButton} onPress={handleBackPress}>
        <Image source={images.leftarrow} style={style.leftarrowImage} />
      </TouchableOpacity>
      <Text
        style={[
          style.header ?? style.title ?? style.headerText,
          { color: colors.colors.text },
        ]}
      >
        {headerTitle}
      </Text>
      {type === "notification" && (
        <TouchableOpacity style={style.new2container}>
          <Text style={style.new2Text}>
            {unreadCount > 0 ? `${unreadCount} new` : "0"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );

  if (headerMap[type as keyof typeof headerMap]) {
    const { style, title: headerTitle } =
      headerMap[type as keyof typeof headerMap];
    return renderBackHeader(style, headerTitle);
  }

  if (type === "back" || showBackButton || title) {
    return (
      <View style={containerStyle ?? addcardstyles.headerContainer}>
        {showBackButton && (
          <TouchableOpacity
            style={backButtonStyle ?? addcardstyles.backButton}
            onPress={handleBackPress}
          >
            <Image
              source={images.leftarrow}
              style={backButtonImageStyle ?? addcardstyles.leftarrowImage}
            />
          </TouchableOpacity>
        )}
        {title && (
          <Text
            style={[
              titleStyle ?? addcardstyles.header,
              { color: colors.colors.text },
            ]}
          >
            {title}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View style={homeStyles.header}>
      {location && showLocation && (
        <TouchableOpacity
          style={homeStyles.locationContainer}
          onPress={handleLocationPress}
        >
          <Image source={images.locationIcon} style={homeStyles.locationIcon} />
          <Text
            style={[homeStyles.locationText, { color: colors.colors.text }]}
          >
            {location}
          </Text>
          <Image
            style={[
              homeStyles.downarrowIcon,
              { tintColor: colors.colors.tintColor },
            ]}
            source={images.downarrow}
          />
        </TouchableOpacity>
      )}
      {showNotifications && (
        <TouchableOpacity
          style={homeStyles.notificationButton}
          onPress={handleNotificationPress}
        >
          <Image
            source={images.notificationIcon}
            style={[
              homeStyles.notificationIcon,
              { tintColor: colors.colors.tintColor },
            ]}
          />
          {unreadCount > 0 && (
            <View style={homeStyles.notificationBubble}>
              <Text style={homeStyles.notificationBubbleText}>
                {unreadCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;
