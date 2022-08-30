import React, { useReducer } from "react";

import MoviesContext from "./MoviesContext";
import { MoviesReducer } from "./MoviesReducer";
// Types
import { GET_MOVIES, GET_MOVIE } from "../types";

const useMoviesState = ({ children }: any) => {
  const initialState = {
    movies: [],
    selectedMovie: null,
  };
  // Reducer
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  // Services
  const getMovies = () => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ payload: data, type: GET_MOVIES });
      })
      .catch((err) => console.log(err));
  };

  const getMovie = (id: number | string) => {
    fetch("https://ghibliapi.herokuapp.com/films/" + id)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ payload: data, type: GET_MOVIE });
      })
      .catch((err) => console.log(err));
  };

  // Context
  const context = {
    movies: state.movies,
    selectedMovie: state.selectedMovie,
    getMovies,
    getMovie,
  };

  return (
    <MoviesContext.Provider value={context}>
      {children}
    </MoviesContext.Provider>
  );
};

export default useMoviesState;
