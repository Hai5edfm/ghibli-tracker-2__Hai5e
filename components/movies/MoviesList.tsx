import React, { Suspense, useContext, useRef, useState } from "react";
// Components
import MovieItem from "./MovieItem";
import Filter from "../navigation/Filter";
import { Searchbar } from "../navigation/Searchbar";
import { LeftButton } from "./LeftButton";
import { RightButton } from "./RightButton";
import { LoaderSkeleton } from "../navigation/MovieListSkeleton";
// Hooks
import { useGetFilms } from "../../hooks/useGetFilms";
import { SearchContext } from "../../context/Search/SearchContext";

interface MoviesListProps {}

const MoviesList: React.FC<MoviesListProps> = () => {
  // Hooks API
  const { moviesList, setMoviesList, isLoading, setIsLoading } = useGetFilms();
  const { isMatch, setIsMatch }: any = useContext(SearchContext);
  const carousel: any = useRef(null);

  return (
    <div className="my-7 md:w-[80%] w-full">
      <div className="flex flex-row justify-between px-5">
        <h1 className="px-2 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
          Movies
        </h1>
        <div className="flex items-center justify-center transition-all">
          <Filter moviesList={moviesList} setMoviesList={setMoviesList} />
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
          {isLoading && <LoaderSkeleton />}
          {moviesList.map((item: any) => {
            if (!isMatch.length) {
              return <MovieItem item={item} key={item.id} />;
            }
            if (isMatch.length > 0) {
              if (item.title.toLowerCase().includes(isMatch.toLowerCase())) {
                return <MovieItem item={item} key={item.id} />;
              } else {
                return null;
              }
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;
