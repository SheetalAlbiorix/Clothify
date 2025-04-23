import {
    getMessaging,
    onMessage,
    onNotificationOpenedApp,
    getInitialNotification,
  } from '@react-native-firebase/messaging';
import { strings } from '../utils/strings';
  
  export function setupFCMListeners() {
    const messaging = getMessaging();
  
    onMessage(messaging, async remoteMessage => {
      console.log(strings.foregroundfcmmessage, remoteMessage);
    });
  
    onNotificationOpenedApp(messaging, remoteMessage => {
      console.log(strings.appopenedBG, remoteMessage);
    });
  
    getInitialNotification(messaging).then(remoteMessage => {
      if (remoteMessage) {
        console.log(strings.appopenQUIT, remoteMessage);
      }
    });
    messaging.setBackgroundMessageHandler(async remoteMessage => {
        console.log(strings.backgroundfcmtoken, remoteMessage);
      });
  }
  