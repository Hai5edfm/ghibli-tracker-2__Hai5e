import React, { useReducer, useState } from "react";

import { MoviesContext } from "./MoviesContext";
import { MoviesReducer } from "./MoviesReducer";
import { useGetFilms } from "../../hooks/useGetFilms";
// Types
import { GET_MOVIES, GET_MOVIE } from "../types";
// Utils
import { urlTrailers } from "../../utils/urlTrailers";
import { arrayBuffer } from "stream/consumers";

// create function that receives two arrays
const mergingUrlinMovies = (movie: any, urls: Array<object>) => {
  // and returns a new array with the elements of both arrays
  let item = movie;
  urls.map((url: any) => {
    let lowerCase = url.title.toLowerCase();
    if (lowerCase.includes(movie.title.toLowerCase())) {
      item = { ...movie, ...url };
      return item;
    }
    return null;
  });
  return item;
};

interface moviesState {
  moviesList?: Array<any>;
  setMoviesList?: any;
  isLoading?: any;
  children?: React.ReactNode;
}
const useMoviesState: React.FC<moviesState> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const initialState = {
    movies: [],
    selectedMovie: null,
  };
  // Reducer
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  // Services
  const getMovies = () => {
    isLoading;
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ payload: data, type: GET_MOVIES });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getMovie = (id: number | string) => {
    isLoading;
    fetch("https://ghibliapi.herokuapp.com/films/" + id)
      .then((res) => res.json())
      .then((data) => {
        let dataMerged = mergingUrlinMovies(data, urlTrailers);
        dispatch({ payload: dataMerged, type: GET_MOVIE });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const setMovies = (data: Array<any>) => {
    dispatch({ payload: data, type: GET_MOVIES });
  };

  // Context
  const context = {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    getMovies,
    getMovie,
    isLoading,
    setIsLoading,
    setMovies,
  };

  return (
    <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>
  );
};

export default useMoviesState;
