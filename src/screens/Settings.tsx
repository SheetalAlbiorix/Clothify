import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { settingsstyle } from "../styles/Settingsstyle";
import { useTheme } from "../themes/theme";
import { StatusBar } from "expo-status-bar";
import Header from "../components/HeaderGlobal";
import NoDataFound from "../service/NoDataFound";
import NetInfo from "@react-native-community/netinfo";

type SettingsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "settings"
>;

const Settings = () => {
  const colors = useColors();
  const { statusBarStyle } = useTheme();
  const navigation = useNavigation<SettingsNavigationProp>();
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(!!state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (!isConnected) {
    return (
      <View
        style={[
          settingsstyle.container,
          { backgroundColor: colors.colors.background },
        ]}
      >
        <StatusBar style={statusBarStyle} />
        <Header type="settings" />
        <NoDataFound message={strings.noSettingsFound} />
      </View>
    );
  }

  return (
    <View
      style={[
        settingsstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <Header type="settings" />
      <View style={settingsstyle.mainListContainer}>
        <TouchableOpacity style={settingsstyle.profileholder}>
          <View style={settingsstyle.profilefirstView}>
            <Image
              source={images.notifiprofileIcon}
              style={[
                settingsstyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
            <Text
              style={[settingsstyle.profileText, { color: colors.colors.text }]}
            >
              {strings.notificationsettings}
            </Text>
          </View>

          <Image
            source={images.arrowright}
            style={[
              settingsstyle.profileIconImage,
              { tintColor: colors.colors.iconColor },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={settingsstyle.profileholder}
          onPress={() => navigation.navigate("passwordmanager")}
        >
          <View style={settingsstyle.profilefirstView}>
            <Image
              source={images.passkeyIcon}
              style={[
                settingsstyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
            <Text
              style={[settingsstyle.profileText, { color: colors.colors.text }]}
            >
              {strings.passwordmanager}
            </Text>
          </View>

          <Image
            source={images.arrowright}
            style={[
              settingsstyle.profileIconImage,
              { tintColor: colors.colors.iconColor },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={settingsstyle.profileholder}>
          <View style={settingsstyle.profilefirstView}>
            <Image
              source={images.deleteaccountIcon}
              style={[
                settingsstyle.profileIconImage,
                { tintColor: colors.colors.iconColor },
              ]}
            />
            <Text
              style={[settingsstyle.profileText, { color: colors.colors.text }]}
            >
              {strings.deleteaccount}
            </Text>
          </View>

          <Image
            source={images.arrowright}
            style={[
              settingsstyle.profileIconImage,
              { tintColor: colors.colors.iconColor },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
