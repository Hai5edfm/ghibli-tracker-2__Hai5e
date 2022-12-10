import React, { useReducer, useState } from "react";
import { MoviesContext } from "./MoviesContext";
import { MoviesReducer } from "./MoviesReducer";
import { getAllFilms, getFilm } from "../../data";
// Types
import { GET_MOVIES, GET_MOVIE } from "../types";
// Utils
import { mergingUrlinMovies } from "../../utils/movieVideo";
// Helpers
import { urlTrailers } from "../../helpers/urlTrailers"

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
    getAllFilms()
      .then((data) => {
        dispatch({ payload: data, type: GET_MOVIES });
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  const getMovie = (id: number | string) => {
    isLoading;
    getFilm(id)
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
