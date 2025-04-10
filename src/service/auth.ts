import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { makeRedirectUri } from "expo-auth-session";
import { GOOGLE_ANDROID_CLIENT_ID, GOOGLE_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from "./config";

WebBrowser.maybeCompleteAuthSession();

const firebaseConfig = {
  apiKey: "AIzaSyCXCZq5L3nA2sxAGIxKqfpeB_MZ6pve2G0",
  authDomain: "clothifyapp-33fa7.firebaseapp.com",
  projectId: "clothifyapp-33fa7",
  storageBucket: "clothifyapp-33fa7.firebasestorage.app",
  messagingSenderId: "236208483230",
  appId: "1:236208483230:android:9ba1a4fd25a34098efc48f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUpWithEmail = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signInWithEmail = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);

export const subscribeToAuthChanges = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

export const useGoogleAuth = () => {
    const [request, response, promptAsync] = Google.useAuthRequest({
      clientId: GOOGLE_CLIENT_ID,
      androidClientId: GOOGLE_ANDROID_CLIENT_ID,
      iosClientId: GOOGLE_IOS_CLIENT_ID,
        redirectUri: makeRedirectUri(),
      });
      

  const signInWithGoogle = async () => {
    const result = await promptAsync();
    if (result?.type === "success") {
      const idToken = result.params.id_token;
      const credential = GoogleAuthProvider.credential(idToken);
      return signInWithCredential(auth, credential);
    } else {
      throw new Error("Google sign-in failed.");
    }
  };

  return { request, response, signInWithGoogle };
};

export { auth };
