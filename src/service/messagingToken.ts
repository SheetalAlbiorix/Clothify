import { getToken, requestPermission, getMessaging, AuthorizationStatus } from '@react-native-firebase/messaging';
import isDeviceSupported from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';

export async function getFcmToken() {
  try {
    const messaging = getMessaging();

    const isSupported = await isDeviceSupported();
    if (!isSupported) {
      console.log('FCM not supported on this device');
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
        console.log('POST_NOTIFICATIONS permission denied');
        return null;
      }
    }

    if (enabled) {
      const fcmToken = await getToken(messaging);
      console.log('FCM Token:', fcmToken);
      return fcmToken;
    } else {
      console.log('Notification permissions not granted');
      return null;
    }
  } catch (error) {
    console.error('Error fetching FCM token:', error);
    return null;
  }
}
