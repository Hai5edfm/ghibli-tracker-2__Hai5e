import React, { useRef } from "react";
// Components
import { MovieItem } from "./MovieItem";
import { Filter } from "../navigation/Filter";
import { Searchbar } from "../navigation/Searchbar";
import { LeftButton } from "./LeftButton";
import { RightButton } from "./RightButton";
// Hooks
import { useGetFilms } from "../../hooks/useGetFilms";

interface MoviesListProps {}

const MoviesList: React.FC<MoviesListProps> = () => {
  // Hooks API
  const { moviesList, setMoviesList } = useGetFilms();

  const carousel: any = useRef(null);

  return (
    <div className="my-7 md:w-[80%] w-full">
      <div className="flex flex-row justify-between px-5">
        <h1 className="px-2 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
          Movies
        </h1>
        <div className="flex items-center justify-center transition-all">
          <Filter />
          <Searchbar moviesList={moviesList} setMoviesList={setMoviesList} />
        </div>
      </div>
      <div className={` relative h-auto `}>
        <LeftButton carousel={carousel} />
        <RightButton carousel={carousel} />
        <ul
          className={`flex flex-row transition-all scroll-smooth overflow-auto sm:overflow-hidden p-2 `}
          ref={carousel}
        >
          {moviesList.length &&
            moviesList.map((item: any) => (
              <MovieItem item={item} key={item.id} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;
