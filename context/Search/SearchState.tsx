import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

// Types

export const SearchState = ({ children }: any) => {
  const [isMatch, setIsMatch] = useState("");
  // Services
  // Reducer
  // Context
  const context: any = {
    isMatch,
    setIsMatch,
  };
  return (
    <SearchContext.Provider value={context}>{children}</SearchContext.Provider>
  );
};
