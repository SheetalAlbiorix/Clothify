import {
    getMessaging,
    onMessage,
    onNotificationOpenedApp,
    getInitialNotification,
  } from '@react-native-firebase/messaging';
  
  export function setupFCMListeners() {
    const messaging = getMessaging();
  
    onMessage(messaging, async remoteMessage => {
      console.log('Foreground FCM Message:', remoteMessage);
    });
  
    onNotificationOpenedApp(messaging, remoteMessage => {
      console.log('App opened from background by notification:', remoteMessage);
    });
  
    getInitialNotification(messaging).then(remoteMessage => {
      if (remoteMessage) {
        console.log('App opened from quit by notification:', remoteMessage);
      }
    });
    messaging.setBackgroundMessageHandler(async remoteMessage => {
        console.log('Background FCM Message:', remoteMessage);
      });
  }
  