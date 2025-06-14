import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { allowlocationstyle } from "../styles/AllowLocationStyle";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../themes/theme";
import { useColors } from "../hooks/useColors";
import { RootStackParamList } from "../../App";
import { StackNavigationProp } from "@react-navigation/stack";
import { strings } from "../utils/strings";
import { images } from "../utils/images";
import { getCurrentLocation } from "../utils/locationUtils";
import { StatusBar } from "expo-status-bar";

type AllowLocationNavigationProp = StackNavigationProp<
  RootStackParamList,
  "AllowLocation"
>;

const AllowLocation = () => {
  const navigation = useNavigation<AllowLocationNavigationProp>();
  const { statusBarStyle } = useTheme();
  const colors = useColors();

  const requestLocationPermission = async () => {
    const location = await getCurrentLocation();
    if (!location) return;

    navigation.navigate("Tab", { name: "Home", location: "" });
  };

  return (
    <View
      style={[
        allowlocationstyle.container,
        { backgroundColor: colors.colors.background },
      ]}
    >
      <StatusBar style={statusBarStyle} />
      <View style={allowlocationstyle.locationimageContainer}>
        <Image
          style={allowlocationstyle.locationIcon}
          source={images.locationIcon}
        />
      </View>
      <View style={allowlocationstyle.headinfotext}>
        <Text
          style={[allowlocationstyle.heading, { color: colors.colors.text }]}
        >
          {strings.whatslocation}
        </Text>
        <Text style={allowlocationstyle.locationinfotext}>
          {strings.locationinfotext}
        </Text>
      </View>
      <View style={allowlocationstyle.accessbuttonContainer}>
        <TouchableOpacity
          style={allowlocationstyle.accessbutton}
          onPress={requestLocationPermission}
        >
          <Text style={allowlocationstyle.accessText}>
            {strings.allowlocationaccess}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={allowlocationstyle.manualButtonContainer}>
        <TouchableOpacity
          style={allowlocationstyle.manualButton}
          onPress={() => {
            navigation.navigate({
              name: "LocationMain",
              params: { fromHome: true },
            });
          }}
        >
          <Text style={allowlocationstyle.manuallocationtext}>
            {strings.manualLocationtext}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AllowLocation;
