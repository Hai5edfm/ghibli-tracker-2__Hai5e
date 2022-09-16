import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
import { sortingMovies } from "../../utils/filter";

export const Filter: React.FC = ({ moviesList, setMoviesList }: any) => {
  const [isActivated, setIsActivated] = useState(false);

  const handleFilter = (category: string, order: string) => {
    const sorted = sortingMovies(category, order, moviesList);
    setMoviesList(sorted);
  };

  return (
    <div className="relative flex items-center mx-1 w-fit">
      <BiFilter
        className="text-4xl transition-colors cursor-pointer m text-ghibli-light hover:text-gray-600"
        onClick={() => {
          setIsActivated(!isActivated);
        }}
      />
      <ul
        className={`z-10 top-8 right-4 sm:z-0 sm:bg-transparent p-4 sm:p-0 rounded-md  bg-white absolute sm:shadow-none shadow-aesthetic sm:static  transition-all sm:transition-all transform-gpu sm:flex block  justify-center items-center ${
          isActivated
            ? "sm:w-60 h-fit w-auto sm:mr-2 visible opacity-90 sm:opacity-100"
            : "opacity-0 w-0 h-0 invisible p-0 m-0"
        }`}
      >
        {isActivated && (
          <>
            <button
              className={` cursor-pointer sm:my-0 m-2 text-slate-600 hover:text-slate-700 active:text-slate-700 `}
              onClick={() => handleFilter("rt_score", "ascendant")}
            >
              Rate
            </button>
            <button
              className={` cursor-pointer sm:my-0 m-2 text-slate-600 hover:text-slate-700 active:text-slate-700 `}
              onClick={() => handleFilter("release_date", "ascendant")}
            >
              Date
            </button>
            <button
              className={` cursor-pointer sm:my-0 m-2 text-slate-600 hover:text-slate-700 active:text-slate-700 `}
              onClick={() => handleFilter("running_time", "ascendant")}
            >
              Duration
            </button>
          </>
        )}
      </ul>
    </div>
  );
};
