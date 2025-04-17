import React, { createContext, useContext, useState } from "react";

type UserContextType = {
  name: string | null;
  setName: (name: string | null) => void;
};

const UserContext = createContext<UserContextType>({
  name: null,
  setName: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
