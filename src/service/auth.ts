import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithCredential,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  UserCredential,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { API_KEY } from "./config";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "clothify-app-4e38e.firebaseapp.com",
  projectId: "clothify-app-4e38e",
  storageBucket: "clothify-app-4e38e.appspot.com",
  messagingSenderId: "46897939889",
  appId: "1:46897939889:android:5193134377f62e7e41a990",
};


GoogleSignin.configure({
  webClientId: process.env.GOOGLE_CLIENT_ID,
});


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

export const signUpWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const userInfo = await GoogleSignin.signIn();
    console.log("🧪 userInfo:", userInfo);

    const { idToken } = await GoogleSignin.getTokens();
    return await signInWithGoogleFirebase(idToken);
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};

export const signInWithGoogleFirebase = async (idToken: string): Promise<UserCredential> => {
  try {
    const credential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, credential);
    return userCredential;
  } catch (error) {
    console.error("Firebase Google Sign-In Error:", error);
    throw error;
  }
};


export const signUpWithEmail = async (
  email: string,
  password: string,
  name: string
): Promise<UserCredential> => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);

  const uid = userCredential.user.uid;
  await setDoc(doc(db, "users", uid), {
    uid,
    email,
    name,
    provider: "email",
    createdAt: new Date().toISOString(),
  });

  return userCredential;
};

export const signInWithEmail = (
  email: string,
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => signOut(auth);

export const subscribeToAuthChanges = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

export { auth, db };
