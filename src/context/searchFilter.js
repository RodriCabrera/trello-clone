import { createContext, useState } from "react";

export const SearchFilterContext = createContext();

export const SearchFilterProvider = ({ children }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const data = {
    searchFilter,
    setSearchFilter,
  };
  return (
    <SearchFilterContext.Provider value={data}>
      {children}
    </SearchFilterContext.Provider>
  );
};
