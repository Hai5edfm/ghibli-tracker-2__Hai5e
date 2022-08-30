/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useContext } from "react";
import search from "../../utils/search";
import { GoSearch } from "react-icons/go";
// Context
// import MoviesContext from "../../context/Movies/MoviesContext";
// import { GET_MOVIES } from "../../context/types";
// import MoviesList from "../movies/MoviesList";

function Searchbar({ moviesList, setMoviesList }: any) {
  // const moviesContext = useContext(MoviesContext);
  const [query, setQuery] = useState("");
  const [isActivated, setIsActivated] = useState(false);
  const [moviesFiltered, setMoviesFiltered] = useState([]);

  // Handles the input to makes querys
  const handleInput = (e: any) => {
    const queryValue = e.target.value;
    setQuery(queryValue);
    search(query, moviesList);
    console.log("results", search(query, moviesList));
  };
  return (
    <div className="flex items-center justify-center">
      <GoSearch
        className="mr-2 text-3xl text-ghibli-light "
        onClick={() => {
          setIsActivated(!isActivated);
        }}
      />
      <input
        placeholder="search"
        autoComplete="off"
        className={`h-7 rounded-lg shadow-aesthetic outline-none px-2 w-44 transition-transform active:translate-x-7 ${isActivated ? "block" : "hidden"}`}
        type="text"
        id="search"
        onChange={handleInput}
      />
    </div>
  );
}

export { Searchbar };
