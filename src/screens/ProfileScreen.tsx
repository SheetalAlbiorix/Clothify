// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
// import { useColors } from "../hooks/useColors";
// import { useNavigation } from "@react-navigation/native";
// import { profilestyle } from "../styles/ProfileStyle";
// import { images } from "../utils/images";
// import { strings } from "../utils/strings";
// import { StackNavigationProp } from "@react-navigation/stack";
// import { RootStackParamList } from "../../App";
// import { LogoutModal } from "../components/LogoutModal";
// import { useUser } from "../hooks/userContext";
// import { logout } from "../service/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import MediaPickerModal from "../components/MediaPicker";
// import { useTheme } from "../themes/theme";
// import { StatusBar } from "expo-status-bar";

// type ProfileScreenNavigationProp = StackNavigationProp<
//   RootStackParamList,
//   "Profile"
// >;

// const ProfileScreen = () => {
//   const colors = useColors();
//   const navigation = useNavigation<ProfileScreenNavigationProp>();
//   const [isLogoutModalVisible, setLogoutModalVisible] = useState(false);
//   const [modalVisible, setModalVisible] = useState(false);
//   const { name, photoUrl, setName, setPhotoUrl } = useUser();
//   const [mediaUri, setMediaUri] = useState<string | null>(null);
//   const { statusBarStyle } = useTheme();

//   const handleLogoutPress = () => {
//     setLogoutModalVisible(true);
//   };

//   const handleCancelLogout = () => {
//     setLogoutModalVisible(false);
//   };

//   const handleConfirmLogout = async () => {
//     setLogoutModalVisible(false);
//     try {
//       await setName(null);
//       await setPhotoUrl(null);
//       await AsyncStorage.multiRemove(["userName", "userPhotoUrl"]);
//       await logout();
//       console.log("User logged out successfully");
  
//       navigation.reset({
//         index: 0,
//         routes: [{ name: "Welcome" }],
//       });
//     } catch (error) {
//       console.error("Logout error:", error);
//     }
//   };
  

//   const handleMediaSelected = (uri: string, type: string) => {
//     console.log(strings.mediaselected, uri);
//     setMediaUri(uri);
//   };

//   return (
//     <View
//       style={[
//         profilestyle.container,
//         { backgroundColor: colors.colors.background },
//       ]}
//     >
//       <View style={profilestyle.headerContainer}>
//         <TouchableOpacity
//           style={profilestyle.backButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image
//             source={images.leftarrow}
//             style={profilestyle.leftarrowImage}
//           />
//         </TouchableOpacity>
//         <Text style={[profilestyle.header, { color: colors.colors.text }]}>
//           {strings.profile}
//         </Text>
//       </View>

//       <MediaPickerModal
//         visible={modalVisible}
//         onClose={() => setModalVisible(false)}
//         onMediaSelected={handleMediaSelected}
//       />

//       <StatusBar style={statusBarStyle} />

//       <ScrollView showsVerticalScrollIndicator={false}>
//         <View style={profilestyle.MainImageContainer}>
//           <TouchableOpacity
//             style={profilestyle.profileImageContainer}
//             onPress={() => setModalVisible(true)}
//           >
//             <Image
//               source={photoUrl ? { uri: photoUrl } : images.profileIcon}
//               style={profilestyle.profileImage}
//             />
//             <Image source={images.editIcon} style={profilestyle.editIcon} />
//           </TouchableOpacity>
//           <Text style={[profilestyle.nameText, { color: colors.colors.text }]}>
//             {name ? name : "Guest"}
//           </Text>
//         </View>

//         <View style={profilestyle.MainListContainer}>
//           <ProfileOption
//             icon={images.notifiprofileIcon}
//             text={strings.UserProfile}
//             onPress={() => navigation.navigate("CompleteProfile")}
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.paymentIcon}
//             text={strings.paymentMethods}
//             onPress={() =>
//               navigation.navigate("PaymentMethod", {
//                 newCard: undefined,
//                 selectedAddress: undefined,
//                 selectedArrival: undefined,
//               })
//             }
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.orderListIcon}
//             text={strings.myorders}
//             onPress={() => navigation.navigate("MyOrders")}
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.settingsIcon}
//             text={strings.Settings}
//             onPress={() => navigation.navigate("settings")}
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.helpIcon}
//             text={strings.helpcenter}
//             onPress={() => navigation.navigate("helpcenter")}
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.privacyIcon}
//             text={strings.privacypolicy}
//             onPress={() => navigation.navigate("privacy")}
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.inviteIcon}
//             text={strings.invitefriends}
//             onPress={() => navigation.navigate("invite")}
//             colors={colors}
//           />
//           <ProfileOption
//             icon={images.logoutIcon}
//             text={strings.logout}
//             onPress={handleLogoutPress}
//             colors={colors}
//           />
//         </View>
//       </ScrollView>

//       <LogoutModal
//         isVisible={isLogoutModalVisible}
//         onCancel={handleCancelLogout}
//         onLogout={handleConfirmLogout}
//       />
//     </View>
//   );
// };

// const ProfileOption = ({
//   icon,
//   text,
//   onPress,
//   colors,
// }: {
//   icon: any;
//   text: string;
//   onPress: () => void;
//   colors: ReturnType<typeof useColors>;
// }) => (
//   <TouchableOpacity style={profilestyle.profileholder} onPress={onPress}>
//     <View style={profilestyle.profilefirstView}>
//       <Image
//         source={icon}
//         style={[
//           profilestyle.profileIconImage,
//           { tintColor: colors.colors.iconColor },
//         ]}
//       />
//       <Text
//         style={[profilestyle.profileText, { color: colors.colors.text }]}
//       >
//         {text}
//       </Text>
//     </View>
//     <Image
//       source={images.arrowright}
//       style={[
//         profilestyle.profileIconImage,
//         { tintColor: colors.colors.iconColor },
//       ]}
//     />
//   </TouchableOpacity>
// );

// export default ProfileScreen;

import React, { useEffect, useState } from "react";
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
  const { name, photoUrl, setName, setPhotoUrl } = useUser();
  const [mediaUri, setMediaUri] = useState<string | null>(null);
  const { statusBarStyle } = useTheme();

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedName = await AsyncStorage.getItem("userName");
        const storedPhotoUrl = await AsyncStorage.getItem("userPhotoUrl");

        if (storedName) {
          setName(storedName);
        }

        if (storedPhotoUrl) {
          setPhotoUrl(storedPhotoUrl);
        }
      } catch (error) {
        console.error("Error loading user data from AsyncStorage", error);
      }
    };

    loadUserData();
  }, [setName, setPhotoUrl]);

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
      await AsyncStorage.multiRemove(["userName", "userPhotoUrl"]);
      await logout();
      console.log("User logged out successfully");

      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    } catch (error) {
      console.error("Logout error:", error);
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
              style={profilestyle.profileImage}
            />
            <Image source={images.editIcon} style={profilestyle.editIcon} />
          </TouchableOpacity>
          <Text style={[profilestyle.nameText, { color: colors.colors.text }]}>
            {name ? name : "Guest"}
          </Text>
        </View>

        <View style={profilestyle.MainListContainer}>
          <ProfileOption
            icon={images.notifiprofileIcon}
            text={strings.UserProfile}
            onPress={() => navigation.navigate("CompleteProfile")}
            colors={colors}
          />
          <ProfileOption
            icon={images.paymentIcon}
            text={strings.paymentMethods}
            onPress={() =>
              navigation.navigate("PaymentMethod", {
                newCard: undefined,
                selectedAddress: undefined,
                selectedArrival: undefined,
              })
            }
            colors={colors}
          />
          <ProfileOption
            icon={images.orderListIcon}
            text={strings.myorders}
            onPress={() => navigation.navigate("MyOrders")}
            colors={colors}
          />
          <ProfileOption
            icon={images.settingsIcon}
            text={strings.Settings}
            onPress={() => navigation.navigate("settings")}
            colors={colors}
          />
          <ProfileOption
            icon={images.helpIcon}
            text={strings.helpcenter}
            onPress={() => navigation.navigate("helpcenter")}
            colors={colors}
          />
          <ProfileOption
            icon={images.privacyIcon}
            text={strings.privacypolicy}
            onPress={() => navigation.navigate("privacy")}
            colors={colors}
          />
          <ProfileOption
            icon={images.inviteIcon}
            text={strings.invitefriends}
            onPress={() => navigation.navigate("invite")}
            colors={colors}
          />
          <ProfileOption
            icon={images.logoutIcon}
            text={strings.logout}
            onPress={handleLogoutPress}
            colors={colors}
          />
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

const ProfileOption = ({
  icon,
  text,
  onPress,
  colors,
}: {
  icon: any;
  text: string;
  onPress: () => void;
  colors: ReturnType<typeof useColors>;
}) => (
  <TouchableOpacity style={profilestyle.profileholder} onPress={onPress}>
    <View style={profilestyle.profilefirstView}>
      <Image
        source={icon}
        style={[profilestyle.profileIconImage, { tintColor: colors.colors.iconColor }]}
      />
      <Text
        style={[profilestyle.profileText, { color: colors.colors.text }]}
      >
        {text}
      </Text>
    </View>
    <Image
      source={images.arrowright}
      style={[profilestyle.profileIconImage, { tintColor: colors.colors.iconColor }]}
    />
  </TouchableOpacity>
);

export default ProfileScreen;
