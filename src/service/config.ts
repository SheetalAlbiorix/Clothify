import Constants from 'expo-constants';

// Add fallbacks and check both possible paths
const extraData = Constants.expoConfig?.extra || Constants.manifest?.extra || {};

// Export the variables with fallbacks
export const GOOGLE_CLIENT_ID = extraData.GOOGLE_CLIENT_ID || '';
export const GOOGLE_ANDROID_CLIENT_ID = extraData.GOOGLE_ANDROID_CLIENT_ID || '';
export const GOOGLE_IOS_CLIENT_ID = extraData.GOOGLE_IOS_CLIENT_ID || '';

// Debug log (remove in production)
console.log('Config values:', {
  GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_ANDROID_CLIENT_ID: GOOGLE_ANDROID_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_IOS_CLIENT_ID: GOOGLE_IOS_CLIENT_ID ? 'Present' : 'Missing'
});