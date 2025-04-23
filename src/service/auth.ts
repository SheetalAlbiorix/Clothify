import auth, { GoogleAuthProvider } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { API_KEY, APPID, AUTHDOMAIN, GOOGLE_CLIENT_ID, MESSAGINGSENDERID, PROJECTID, STORAGEBUCKET } from './config';
import { strings } from '../utils/strings';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID
  });

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const signUpWithEmail = async (email: string, password: string) => {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(strings.errorduringsignup, error);
    throw error;
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error(strings.errorduringsignin, error);
    throw error;
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
    await GoogleSignin.signOut();
    console.log(strings.usersuccesslogout);
  } catch (error) {
    console.error(strings.errorduringlogout, error);
    throw error;
  }
};

export const subscribeToAuthChanges = (callback: (user: any) => void) => {
  return auth().onAuthStateChanged(callback);
};

export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const data = await GoogleSignin.signIn();
    const tokens = await GoogleSignin.getTokens();
    const credential = GoogleAuthProvider.credential(data.idToken, tokens.accessToken);

    const firebaseUserCredential = await auth().signInWithCredential(credential);

    return firebaseUserCredential;
  } catch (error) {
    console.error(strings.errorduringgooglesignin, error);
    throw error;
  }
};

export const signUpWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const data = await GoogleSignin.signIn();

    const tokens = await GoogleSignin.getTokens();
    const googleCredential = GoogleAuthProvider.credential(data.idToken, tokens.accessToken);

    const userCredential = await auth().signInWithCredential(googleCredential);

    return userCredential;
  } catch (error) {
    console.error(strings.errorduringgooglesignup, error);
    throw error;
  }
};

export { auth, GoogleAuthProvider, db };
