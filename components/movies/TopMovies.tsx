import React, { useContext, useEffect } from "react";
import MoviesContext from "../../context/Movies/MoviesContext";
import Image from "next/image";

const TopMovies = () => {
  const { movies, getMovies } = useContext(MoviesContext);
  useEffect(() => {
    getMovies();
  }, []);
  const myArray = [...movies]
    .sort(
      (a: { rt_score: string }, b: { rt_score: string }) =>
        parseInt(a.rt_score) - parseInt(b.rt_score)
    )
    .slice(17)
    .reverse();
  return (
    <div className="md:w-[80%] w-full">
      <h1 className="px-2 m-4 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
        Top Rated
      </h1>
      <div className="overflow-hidden overflow-x-auto bg-white rounded-md h-fit shadow-aesthetic">
        <ul className="flex flex-row ">
          {myArray.length > 0 &&
            myArray.map((item: any) => (
              <li
                key={item.id}
                className="relative m-4 transition-transform cursor-pointer hover:scale-110"
              >
                <img
                  src={item.movie_banner}
                  height={180}
                  width={292}
                  className="rounded-md max-w-none"
                />
                <div className="absolute bottom-0 flex items-end w-full h-full transition-shadow rounded-b-md inner-shadow-bottom hover:inner-shadow-max ">
                  <h1 className="w-40 p-2 font-bold text-left text-gray-100">
                    {item.title}
                  </h1>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TopMovies;
