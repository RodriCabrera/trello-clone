import { useContext } from "react";

import { SearchFilterContext } from "../context/searchFilter";

export const useSearchFilter = () => {
  const context = useContext(SearchFilterContext);
  if (context === undefined) {
    throw new Error(
      "useSearchFilter can only be used inside SearchFilterProvider"
    );
  }
  return context;
};
