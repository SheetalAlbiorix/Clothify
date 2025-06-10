import 'dotenv/config';
import { API_KEY } from './src/service/config';

// Add this debug line to verify environment variables are loading
console.log('Environment variables in app.config.js:', {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_ANDROID_CLIENT_ID: process.env.GOOGLE_ANDROID_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_IOS_CLIENT_ID: process.env.GOOGLE_IOS_CLIENT_ID ? 'Present' : 'Missing',
  API_KEY: process.env.API_KEY ? 'Present' : 'Missing',
});

export default {
  expo: {
    name: "clothify",
    slug: "clothify",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./src/assets/logo.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./src/assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      googleServicesFile: "./GoogleService-Info.plist"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./src/assets/logo.png",
        backgroundColor: "#ffffff"
      },
      softwareKeyboardLayoutMode: "pan",
      package: "com.anonymous.clothify",
      googleServicesFile: "./google-services.json",
      buildProperties: {
        android: {
          keystore: {
            keystorePath: "./android/app/debugkeystore.jks",
            keystorePassword: "123456",
            keyAlias: "newkey",
            keyPassword: "123456"
          }
        }
      }
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/crashlytics",
      "@react-native-google-signin/google-signin",
      "expo-asset"
    ],
    web: {
      favicon: "./src/assets/favicon.png"
    },
    extra: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_ANDROID_CLIENT_ID: process.env.GOOGLE_ANDROID_CLIENT_ID,
      GOOGLE_IOS_CLIENT_ID: process.env.GOOGLE_IOS_CLIENT_ID,
      API_KEY: process.env.API_KEY,
      AUTHDOMAIN: process.env.AUTHDOMAIN,
      PROJECTID: process.env.PROJECTID,
      STORAGEBUCKET: process.env.STORAGEBUCKET,
      MESSAGINGSENDERID: process.env.MESSAGINGSENDERID,
      APPID: process.env.APPID,
      eas: {
        projectId: '98988d6f-fd53-4fcd-979d-9b4153dc005d',
      },
    }
  }
};