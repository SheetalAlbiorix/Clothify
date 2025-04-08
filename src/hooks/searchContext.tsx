import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext({
  search: "",
  setSearch: (value: string) => {},
});

import { ReactNode } from "react";

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
