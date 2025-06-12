import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "../service/auth";
import { UserContextType } from "../types/types";

const UserContext = createContext<UserContextType>({
  name: null,
  setName: () => {},
  photoUrl: null,
  setPhotoUrl: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [name, setNameState] = useState<string | null>(null);
  const [photoUrl, setPhotoUrlState] = useState<string | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      const storedName = await AsyncStorage.getItem("userName");
      const storedPhoto = await AsyncStorage.getItem("userPhotoUrl");

      if (storedName) setNameState(storedName);
      if (storedPhoto) setPhotoUrlState(storedPhoto);
    };

    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        setNameState(user.displayName);
        setPhotoUrlState(user.photoURL);
      } else {
        setNameState(null);
        setPhotoUrlState(null);
      }
    });

    loadUserData();

    return () => unsubscribe();
  }, []);

  const setName = async (newName: string | null) => {
    setNameState(newName);
    if (newName) {
      await AsyncStorage.setItem("userName", newName);
    } else {
      await AsyncStorage.removeItem("userName");
    }
  };

  const setPhotoUrl = async (url: string | null) => {
    setPhotoUrlState(url);
    if (url) {
      await AsyncStorage.setItem("userPhotoUrl", url);
    } else {
      await AsyncStorage.removeItem("userPhotoUrl");
    }
  };

  return (
    <UserContext.Provider value={{ name, setName, photoUrl, setPhotoUrl }}>
      {children}
    </UserContext.Provider>
  );
};
