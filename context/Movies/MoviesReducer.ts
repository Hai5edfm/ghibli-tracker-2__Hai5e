import { GET_MOVIES, SEARCH_MOVIES, GET_MOVIE } from "../types";

export const MoviesReducer = (
  state: any,
  action: { payload: any; type: any }
) => {
  const { payload, type } = action;

  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    case GET_MOVIE:
      return {
        ...state,
        selectedMovie: payload,
      };
    default:
      return state;
  }
};
