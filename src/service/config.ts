import Constants from 'expo-constants';

const extraData = Constants.expoConfig?.extra || Constants.manifest?.extra || {};

export const GOOGLE_CLIENT_ID = extraData.GOOGLE_CLIENT_ID || '';
export const GOOGLE_ANDROID_CLIENT_ID = extraData.GOOGLE_ANDROID_CLIENT_ID || '';
export const GOOGLE_IOS_CLIENT_ID = extraData.GOOGLE_IOS_CLIENT_ID || '';
export const API_KEY = extraData.API_KEY || '';
export const AUTHDOMAIN = extraData.AUTHDOMAIN || '';
export const PROJECTID = extraData.PROJECTID || '';
export const STORAGEBUCKET = extraData.STORAGEBUCKET || '';
export const MESSAGINGSENDERID = extraData.MESSAGINGSENDERID || '';
export const APPID = extraData.APPID || '';

console.log('Config values:', {
  GOOGLE_CLIENT_ID: GOOGLE_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_ANDROID_CLIENT_ID: GOOGLE_ANDROID_CLIENT_ID ? 'Present' : 'Missing',
  GOOGLE_IOS_CLIENT_ID: GOOGLE_IOS_CLIENT_ID ? 'Present' : 'Missing',
  API_KEY: API_KEY ? 'Present' : 'Missing',
  AUTHDOMAIN: AUTHDOMAIN ? 'Present' : 'Missing',
  PROJECTID: PROJECTID ? 'Present' : 'Missing',
  STORAGEBUCKET: STORAGEBUCKET ? 'Present' : 'Missing',
  MESSAGINGSENDERID: MESSAGINGSENDERID ? 'Present' : 'Missing',
  APPID: APPID ? 'Present' : 'Missing',
});