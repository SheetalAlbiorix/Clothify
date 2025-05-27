// import auth, { GoogleAuthProvider } from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { initializeApp } from "firebase/app";
// import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// import { API_KEY, APPID, AUTHDOMAIN, GOOGLE_CLIENT_ID, MESSAGINGSENDERID, PROJECTID, STORAGEBUCKET } from './config';
// import { strings } from '../utils/strings';

// const firebaseConfig = {
//   apiKey: API_KEY,
//   authDomain: AUTHDOMAIN,
//   projectId: PROJECTID,
//   storageBucket: STORAGEBUCKET,
//   messagingSenderId: MESSAGINGSENDERID,
//   appId: APPID,
// };

// GoogleSignin.configure({
//   webClientId: GOOGLE_CLIENT_ID,
// });

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);


// export const signUpWithEmail = async (email: string, password: string) => {
//   try {
//     const userCredential = await auth().createUserWithEmailAndPassword(email, password);
//     const user = userCredential.user;
    
//     if (!user.displayName) {
//       const userName = prompt(strings.pleaseenteryourname);
//       if (userName) {
//         await user.updateProfile({ displayName: userName });
//         await saveUserProfile(user);
//       }
//     } else {
//       await saveUserProfile(user);
//     }
//     return userCredential;
//   } catch (error) {
//     console.error(strings.errorduringsignup, error);
//     throw error;
//   }
// };

// export const signInWithEmail = async (email: string, password: string) => {
//   try {
//     const userCredential = await auth().signInWithEmailAndPassword(email, password);
//     const user = userCredential.user;
//     if (!user.displayName) {
//       const userName = prompt(strings.pleaseenteryourname);
//       if (userName) {
//         await user.updateProfile({ displayName: userName });
//         await saveUserProfile(user);
//       }
//     } else {
//       await saveUserProfile(user);
//     }
//     return userCredential;
//   } catch (error) {
//     console.error(strings.errorduringsignin, error);
//     throw error;
//   }
// };

// export const logout = async () => {
//   try {
//     const currentUser = auth().currentUser;
//     if (currentUser) {
//       await auth().signOut();
//       await GoogleSignin.signOut();
//       console.log(strings.userloggedoutfromfirebase);
//     } else {
//       console.log(strings.nousercurrentlysignedin);
//     }
//   } catch (error) {
//     console.error(strings.logouterrorinauthservice, error);
//     throw error;
//   }
// };

// export const subscribeToAuthChanges = (callback: (user: any) => void) => {
//   return auth().onAuthStateChanged(callback);
// };

// export const signInWithGoogle = async () => {
//   try {
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

//     const data = await GoogleSignin.signIn();
//     const tokens = await GoogleSignin.getTokens();
//     const credential = GoogleAuthProvider.credential(data.idToken, tokens.accessToken);

//     const firebaseUserCredential = await auth().signInWithCredential(credential);

//     await saveUserProfile(firebaseUserCredential.user);

//     return firebaseUserCredential;
//   } catch (error) {
//     console.error(strings.errorduringgooglesignin, error);
//     throw error;
//   }
// };

// export const signUpWithGoogle = async () => {
//   try {
//     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

//     const data = await GoogleSignin.signIn();
//     const tokens = await GoogleSignin.getTokens();
//     const googleCredential = GoogleAuthProvider.credential(data.idToken, tokens.accessToken);

//     const userCredential = await auth().signInWithCredential(googleCredential);

//     await saveUserProfile(userCredential.user);

//     return userCredential;
//   } catch (error) {
//     console.error(strings.errorduringgooglesignup, error);
//     throw error;
//   }
// };

// export const saveUserProfile = async (user: any) => {
//   try {
//     const userRef = doc(db, "users", user.uid);
//     const userDoc = await getDoc(userRef);
    
//     if (!userDoc.exists()) {
//       await setDoc(userRef, {
//         name: user.displayName || strings.unameduser,
//         email: user.email,
//         photoUrl: user.photoURL || "",
//       });
//       console.log(strings.userprofilesavedtofirebase);
//     }
//   } catch (error) {
//     console.error(strings.errorsavinguserprofile, error);
//     throw error;
//   }
// };

// export { auth, GoogleAuthProvider, db };


import auth, { GoogleAuthProvider } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { API_KEY, APPID, AUTHDOMAIN, GOOGLE_CLIENT_ID, MESSAGINGSENDERID, PROJECTID, STORAGEBUCKET } from './config';
import { strings } from '../utils/strings';


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

export { auth, GoogleAuthProvider,  db };

