import { MovieItem } from "./MovieItem";
import { Filter } from "../navigation/Filter";
import React, { useEffect, useContext, useState } from "react";
import { useGetFilms } from "../../hooks/useGetFilms";
import { Searchbar } from "../navigation/Searchbar";


// Context
import MoviesContext from "../../context/Movies/MoviesContext";
import { useRouter } from "next/router";
import Link from "next/link";
interface MoviesListProps {}

const MoviesList: React.FC<MoviesListProps> = () => {
  const { moviesList, setMoviesList } = useGetFilms();
  const router = useRouter();
  // Todo: separate this to /services
  return (
    <div className="my-7 md:w-[80%] w-full">
      <div className="flex flex-row justify-between px-5">
        <h1 className="px-2 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
          Movies
        </h1>
        <div className="flex items-center justify-center">
          <Filter />
          <Searchbar moviesList={moviesList} setMoviesList={setMoviesList} />
        </div>
      </div>
      <div className="h-auto overflow-hidden overflow-x-auto ">
        <ul
          className="flex flex-row  w-[4500px] p-2"
          onClick={(e) => {
            console.log(e.target);
          }}
        >
          {moviesList.length &&
            moviesList.map((item: any) => <MovieItem item={item} key={item.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default MoviesList;
