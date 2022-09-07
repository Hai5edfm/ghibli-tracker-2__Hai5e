/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useContext } from "react";
import search from "../../utils/search";
import { GoSearch } from "react-icons/go";
import { SearchContext } from "../../context/Search/SearchContext";

function Searchbar({ moviesList, setMoviesList }: any) {
  const [isActivated, setIsActivated] = useState(false);
  const { setIsMatch, isMatch }: any = useContext(SearchContext);

  // Handles the input to makes queries
  const handleInput = (e: any) => {
    e.preventDefault();
    const queryValue = e.target.value;
    setIsMatch(queryValue);
  };

  return (
    <div className="flex items-center justify-center cursor-pointer">
      <GoSearch
        className="mr-2 text-3xl transition-colors text-ghibli-light hover:text-gray-600"
        onClick={() => {
          setIsActivated(!isActivated);
        }}
      />
      <input
        placeholder="search"
        autoComplete="off"
        className={`h-8 rounded-lg shadow-aesthetic outline-none  transition-all   ${
          isActivated ? "w-40 md:w-60 px-2" : " opacity-0 w-0"
        }`}
        type="text"
        id="search"
        onChange={handleInput}
      />
    </div>
  );
}

export { Searchbar };
