import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Image,
  ScrollView,
} from "react-native";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { profilestyle } from "../styles/ProfileStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { logout } from "../service/auth";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { LogoutModal } from "../components/LogoutModal";
import { useUser } from "../hooks/userContext";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;
const ProfileScreen = () => {
  const colors = useColors();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);

  const { name } = useUser();

  const handleLogoutPress = () => {
    setLogoutModalVisible(true);
  };

  const handleCancelLogout = () => {
    setLogoutModalVisible(false);
  };

  const handleConfirmLogout = async () => {
    setLogoutModalVisible(false);
    try {
      await logout();
      await GoogleSignin.signOut();
      console.log(strings.logoutsuccess);
      navigation.navigate("SignIn");
    } catch (error) {
      console.error(strings.logouterror, error);
    }
  };

  return (
    <View
      style={[
        profilestyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={profilestyle.headerContainer}>
        <TouchableOpacity
          style={profilestyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={profilestyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[profilestyle.header, { color: colors.colors.text }]}>
          {strings.profile}
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={profilestyle.MainImageContainer}>
          <TouchableOpacity style={profilestyle.profileImageContainer}>
            <Image
              source={images.profileIcon}
              style={[
                profilestyle.profileImage,
                { tintColor: colors.colors.tintColor },
              ]}
            />
          </TouchableOpacity>
          <Text style={[profilestyle.nameText, { color: colors.colors.text }]}>
          {name ? name : "Guest"}
          </Text>
        </View>
        <View style={profilestyle.MainListContainer}>
          <TouchableOpacity style={profilestyle.profileholder}>
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.notifiprofileIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.UserProfile}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() =>
              navigation.navigate("PaymentMethod", {
                newCard: undefined,
                selectedAddress: undefined,
                selectedArrival: undefined,
              })
            }
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.paymentIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.paymentMethods}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() => navigation.navigate("MyOrders")}
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.orderListIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.myorders}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() => navigation.navigate("settings")}
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.settingsIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.Settings}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() => navigation.navigate("helpcenter")}
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.helpIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.helpcenter}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() => navigation.navigate("privacy")}
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.privacyIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.privacypolicy}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() => navigation.navigate("invite")}
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.inviteIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.invitefriends}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={handleLogoutPress}
          >
            <View style={profilestyle.profilefirstView}>
              <Image
                source={images.logoutIcon}
                style={[
                  profilestyle.profileIconImage,
                  { tintColor: colors.colors.iconColor },
                ]}
              />
              <Text
                style={[
                  profilestyle.profileText,
                  { color: colors.colors.text },
                ]}
              >
                {strings.logout}
              </Text>
            </View>

            <Image
              source={images.arrowright}
              style={[
                profilestyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <LogoutModal
        isVisible={isLogoutModalVisible}
        onCancel={handleCancelLogout}
        onLogout={handleConfirmLogout}
      />
    </View>
  );
};

export default ProfileScreen;
