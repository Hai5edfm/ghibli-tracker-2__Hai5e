import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { sortingMovies } from "../../utils/filter";

export function Filter({ moviesList, setMoviesList }: any) {
  const [isActivated, setIsActivated] = useState(false);

  const handleFilter = (category: string, order: string) => {
    const sorted = sortingMovies(category, order, moviesList);
    setMoviesList(sorted);
  };

  return (
    <div className="relative flex mx-1 w-fit">
      <BiFilter
        className="text-4xl transition-colors cursor-pointer m text-ghibli-light hover:text-gray-600"
        onClick={() => {
          setIsActivated((prevState) => !prevState);
        }}
      />
      <ul
        className={`transition-all  flex justify-center items-center ${
          isActivated ? "w-60 mr-4 " : "opacity-0 w-0"
        }`}
      >
        {isActivated && (
          <>
            <li
              className="mx-2 cursor-pointer text-ghibli-light hover:text-slate-700 active:text-slate-700"
              onClick={() => handleFilter("rt_score", "ascendant")}
            >
              Rate
            </li>
            <li
              className="mx-2 cursor-pointer text-ghibli-light hover:text-slate-700 active:text-slate-700"
              onClick={() => handleFilter("release_date", "ascendant")}
            >
              Date
            </li>
            <li
              className="mx-2 cursor-pointer text-ghibli-light hover:text-slate-700 active:text-slate-700"
              onClick={() => handleFilter("running_time", "ascendant")}
            >
              Duration
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
