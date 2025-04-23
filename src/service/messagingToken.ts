import { getToken, requestPermission, getMessaging, AuthorizationStatus } from '@react-native-firebase/messaging';
import isDeviceSupported from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';
import { strings } from '../utils/strings';

export async function getFcmToken() {
  try {
    const messaging = getMessaging();

    const isSupported = await isDeviceSupported();
    if (!isSupported) {
      console.log(strings.fcmnotsupported);
      return null;
    }

    const authStatus = await requestPermission(messaging);
    const enabled =
      authStatus === AuthorizationStatus.AUTHORIZED ||
      authStatus === AuthorizationStatus.PROVISIONAL;

    if (Platform.OS === 'android' && Platform.Version >= 33) {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.log(strings.notificationpermissiondenied);
        return null;
      }
    }

    if (enabled) {
      const fcmToken = await getToken(messaging);
      console.log(strings.fcmtoken, fcmToken);
      return fcmToken;
    } else {
      console.log(strings.notificationpermissionnotgranted);
      return null;
    }
  } catch (error) {
    console.error(strings.errorfetchingfcmtoken, error);
    return null;
  }
}
