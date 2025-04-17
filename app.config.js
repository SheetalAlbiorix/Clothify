import 'dotenv/config';

// Add this debug line to verify environment variables are loading
console.log('Environment variables in app.config.js:', {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_ANDROID_CLIENT_ID: process.env.GOOGLE_ANDROID_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_IOS_CLIENT_ID: process.env.GOOGLE_IOS_CLIENT_ID ? 'Present' : 'Missing',
});

export default {
  expo: {
    name: "clothify",
    slug: "clothify",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "../assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      googleServicesFile: "./GoogleService-Info.plist"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "../assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      softwareKeyboardLayoutMode: "pan",
      package: "com.anonymous.clothify",
      googleServicesFile: "./google-services.json"
    },
    plugins: [
      "@react-native-firebase/app",
      "@react-native-firebase/crashlytics"
    ],
    web: {
      favicon: "../assets/favicon.png"
    },
    extra: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      GOOGLE_ANDROID_CLIENT_ID: process.env.GOOGLE_ANDROID_CLIENT_ID,
      GOOGLE_IOS_CLIENT_ID: process.env.GOOGLE_IOS_CLIENT_ID,
    }
  }
};