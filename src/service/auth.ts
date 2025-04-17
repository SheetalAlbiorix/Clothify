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

const firebaseConfig = {
  apiKey: "AIzaSyASMCGg54xQDH6c0ZYa_IsrdzIXWoCcKdc",
  authDomain: "clothify-8295c.firebaseapp.com",
  projectId: "clothify-8295c",
  storageBucket: "clothify-8295c.appspot.com",
  messagingSenderId: "835898821076",
  appId: "1:835898821076:android:2ac36995fa4429b5b2ee41",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const auth = getAuth(app);
const db = getFirestore(app);


export const signInWithGoogleFirebase = async (idToken: string): Promise<UserCredential> => {
  try {
    const credential = GoogleAuthProvider.credential(idToken);
    const userCredential = await signInWithCredential(auth, credential);

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
