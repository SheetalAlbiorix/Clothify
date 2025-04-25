import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { profilestyle } from "../styles/ProfileStyle";
import { images } from "../utils/images";
import { strings } from "../utils/strings";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";
import { LogoutModal } from "../components/LogoutModal";
import { useUser } from "../hooks/userContext";
import { logout } from "../service/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MediaPickerModal from "../components/MediaPicker";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Profile"
>;

const ProfileScreen = () => {
  const colors = useColors();
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { name, photoUrl } = useUser();
  const { setName, setPhotoUrl } = useUser();
  const [mediaUri, setMediaUri] = useState<string | null>(null);
  const { statusBarStyle } = useTheme();

  const handleLogoutPress = () => {
    setLogoutModalVisible(true);
  };

  const handleCancelLogout = () => {
    setLogoutModalVisible(false);
  };

  const handleConfirmLogout = async () => {
    setLogoutModalVisible(false);
    try {
      await setName(null);
      await setPhotoUrl(null);

      await AsyncStorage.removeItem("userName");
      await AsyncStorage.removeItem("userPhotoUrl");

      await logout();
      console.log(strings.logoutsuccess);
      navigation.navigate("Welcome");
    } catch (error) {
      console.error(strings.logouterror, error);
    }
  };

  const handleMediaSelected = (uri: string, type: string) => {
    console.log(strings.mediaselected, uri);
    setMediaUri(uri);
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
      <MediaPickerModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onMediaSelected={handleMediaSelected}
      />
      <StatusBar style={statusBarStyle} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={profilestyle.MainImageContainer}>
          <TouchableOpacity
            style={profilestyle.profileImageContainer}
            onPress={() => setModalVisible(true)}
          >
            <Image
              source={photoUrl ? { uri: photoUrl } : images.profileIcon}
              style={[profilestyle.profileImage]}
            />
            <Image source={images.editIcon} style={profilestyle.editIcon} />
          </TouchableOpacity>
          <Text style={[profilestyle.nameText, { color: colors.colors.text }]}>
            {name ? name : "Guest"}
          </Text>
        </View>
        <View style={profilestyle.MainListContainer}>
          <TouchableOpacity
            style={profilestyle.profileholder}
            onPress={() => navigation.navigate("CompleteProfile")}
          >
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
