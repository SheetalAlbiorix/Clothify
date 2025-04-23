import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { useColors } from "../hooks/useColors";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { settingsstyle } from "../styles/Settingsstyle";

type SettingsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "settings"
>;

const Settings = () => {
  const colors = useColors();
  const navigation = useNavigation<SettingsNavigationProp>();
  return (
    <View
      style={[
        settingsstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <View style={settingsstyle.headerContainer}>
        <TouchableOpacity
          style={settingsstyle.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={images.leftarrow}
            style={settingsstyle.leftarrowImage}
          />
        </TouchableOpacity>
        <Text style={[settingsstyle.header, { color: colors.colors.text }]}>
          {strings.Settings}
        </Text>
      </View>
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
