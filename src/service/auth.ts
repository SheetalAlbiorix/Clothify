import auth, { GoogleAuthProvider } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import Constants from 'expo-constants';
import { strings } from '../utils/strings';
import { getStorage } from 'firebase/storage';

const {
  GOOGLE_CLIENT_ID,
  API_KEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MESSAGINGSENDERID,
  APPID,
} = Constants.expoConfig?.extra || {};

GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
});

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MESSAGINGSENDERID,
  appId: APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export const saveUserProfile = async (user: any) => {
  try {
    const userRef = firestore().collection('users').doc(user.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      await userRef.set({
        name: user.displayName || strings.unameduser,
        email: user.email,
        photoUrl: user.photoURL || "",
      });
      console.log(strings.userprofilesavedtofirebase);
    }
  } catch (error) {
    console.error(strings.errorsavinguserprofile, error);
    throw error;
  }
};


export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (!user.displayName) {
      const userName = prompt(strings.pleaseenteryourname);
      if (userName) {
        await user.updateProfile({ displayName: userName });
      }
    }
    await saveUserProfile(user);
    return userCredential;
  } catch (error) {
    console.error(strings.errorduringsignup, error);
    throw error;
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(email, password);
    const user = userCredential.user;

    if (!user.displayName) {
      const userName = prompt(strings.pleaseenteryourname);
      if (userName) {
        await user.updateProfile({ displayName: userName });
      }
    }
    await saveUserProfile(user);
    return userCredential;
  } catch (error) {
    console.error(strings.errorduringsignin, error);
    throw error;
  }
};


export const signInWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const data = await GoogleSignin.signIn();
    const tokens = await GoogleSignin.getTokens();
    const credential = GoogleAuthProvider.credential(data.idToken, tokens.accessToken);

    const firebaseUserCredential = await auth().signInWithCredential(credential);
    await saveUserProfile(firebaseUserCredential.user);

    return firebaseUserCredential;
  } catch (error) {
    console.error(strings.errorduringgooglesignin, error);
    throw error;
  }
};

export const signUpWithGoogle = signInWithGoogle;


export const logout = async () => {
  try {
    const currentUser = auth().currentUser;
    if (currentUser) {
      await auth().signOut();
      await GoogleSignin.signOut();
      console.log(strings.userloggedoutfromfirebase);
    } else {
      console.log(strings.nousercurrentlysignedin);
    }
  } catch (error) {
    console.error(strings.logouterrorinauthservice, error);
    throw error;
  }
};


export const subscribeToAuthChanges = (callback: (user: any) => void) => {
  return auth().onAuthStateChanged(callback);
};

export const getUserProfilePhoto = async (uid: string): Promise<string | null> => {
  try {
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      const data = userDoc.data();
      return data.photoUrl || null;
    } else {
      console.log(strings.nouserfoundUID, uid);
    }
  } catch (error) {
    console.error(strings.errorfetchinguserprofile, error);
  }
  return null;
};

export { auth, GoogleAuthProvider,  db, storage, firestore  };

