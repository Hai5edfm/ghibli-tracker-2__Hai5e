import React, { useReducer } from "react";

import { MoviesContext } from "./MoviesContext";
import { MoviesReducer } from "./MoviesReducer";
import { useGetFilms } from "../../hooks/useGetFilms";
// Types
import { GET_MOVIES, GET_MOVIE } from "../types";

const useMoviesState = ({ children }: any) => {
  const { isLoading, setIsLoading } = useGetFilms();
  const initialState = {
    movies: [],
    selectedMovie: null,
  };
  // Reducer
  const [state, dispatch] = useReducer(MoviesReducer, initialState);

  // Services
  const getMovies = () => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ payload: data, type: GET_MOVIES });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getMovie = (id: number | string) => {
    setIsLoading(true);
    fetch("https://ghibliapi.herokuapp.com/films/" + id)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ payload: data, type: GET_MOVIE });
        setIsLoading(false);
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
    <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>
  );
};

export default useMoviesState;
