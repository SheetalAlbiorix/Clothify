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
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { GOOGLE_CLIENT_ID } from "./config";

// 🔧 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyASMCGg54xQDH6c0ZYa_IsrdzIXWoCcKdc",
  authDomain: "clothify-8295c.firebaseapp.com",
  projectId: "clothify-8295c",
  storageBucket: "clothify-8295c.appspot.com",
  messagingSenderId: "835898821076",
  appId: "1:835898821076:android:2ac36995fa4429b5b2ee41",
};

// ✅ Prevent duplicate initialization
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);

// 🧠 Configure Google Signin
GoogleSignin.configure({
  webClientId: GOOGLE_CLIENT_ID,
  offlineAccess: true,
  forceCodeForRefreshToken: true,
});

// 🧠 Sign in/up with Google
export const signInWithGoogleNative = async (): Promise<UserCredential> => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const userInfo = await GoogleSignin.signIn(); // This returns user info
    const { idToken } = await GoogleSignin.getTokens(); // Get tokens separately
    console.log("Before Google SignIn");
    console.log("Signed in:", userInfo);
    
    if (!idToken) throw new Error("Google ID token not available.");

    const credential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, credential);

    // Save user to Firestore if not exists
    const uid = userCredential.user.uid;
    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      await setDoc(userDocRef, {
        uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
        provider: "google",
        createdAt: new Date().toISOString(),
      });
    }

    return userCredential;
  } catch (error) {
    console.error("Google Sign-In Error:", error);
    throw error;
  }
};


// 🧠 Email Sign Up + Firestore user creation
export const signUpWithEmail = async (email: string, password: string, name: string): Promise<UserCredential> => {
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

// 🧠 Email Sign In
export const signInWithEmail = (email: string, password: string): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🔁 Logout
export const logout = () => signOut(auth);

// 👥 Listen to auth state
export const subscribeToAuthChanges = (callback: (user: User | null) => void) =>
  onAuthStateChanged(auth, callback);

// Export auth and db for other uses
export { auth, db };
