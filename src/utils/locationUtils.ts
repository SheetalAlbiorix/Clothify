import * as Location from "expo-location";
import { Alert } from "react-native";
import { strings } from "./strings";

export const getCurrentLocation = async (): Promise<Location.LocationObject | null> => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status !== "granted") {
    Alert.alert(strings.permissionDenied, strings.locationaccessneeded);
    return null;
  }

  const location = await Location.getCurrentPositionAsync({});
  console.log(strings.locationlog, location);
  console.log(
    strings.locationaccessed,
    `${strings.latitude} ${location.coords.latitude}${strings.longitude} ${location.coords.longitude}`
  );

  return location;
};
