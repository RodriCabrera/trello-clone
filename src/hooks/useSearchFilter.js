import { useContext } from "react";

import { SearchFilterContext } from "../context/searchFilter";

export const useSearchFilter = () => useContext(SearchFilterContext);
