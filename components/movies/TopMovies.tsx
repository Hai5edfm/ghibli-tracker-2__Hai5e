import React, { useContext, useEffect, useRef } from "react";
import { MoviesContext } from "../../context/Movies/MoviesContext";
import Image from "next/image";
import { LeftButton } from "./LeftButton";
import { RightButton } from "./RightButton";
import Link from "next/link";
import { useGetFilms } from "../../hooks/useGetFilms";
import { TopMoviesSkeleton } from "./TopMoviesSkeleton";

const TopMovies = () => {
  const { movies, getMovies } = useContext(MoviesContext);
  const { isLoading, setIsLoading } = useGetFilms();

  useEffect(() => {
    getMovies();
  }, [getMovies]);
  const myArray = [...movies]
    .sort(
      (a: { rt_score: string }, b: { rt_score: string }) =>
        parseInt(a.rt_score) - parseInt(b.rt_score)
    )
    .slice(17)
    .reverse();

  const carousel: any = useRef(null);

  return (
    <div className="md:w-[80%] w-full">
      <h1 className="px-2 m-4 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
        Top Rated
      </h1>
      <div className="relative bg-white rounded-md h-fit shadow-aesthetic">
        <LeftButton carousel={carousel} />
        <RightButton carousel={carousel} />
        <ul
          ref={carousel}
          className="flex flex-row overflow-auto sm:overflow-hidden scroll-smooth"
        >
          {isLoading && <TopMoviesSkeleton />}
          {myArray.length > 0 &&
            myArray.map((item: any) => (
              <Link
                href={"/movie/" + item.id}
                key={item.id}
                className="max-w-none"
              >
                <li className="relative m-4 transition-transform cursor-pointer hover:scale-110 max-w-none">
                  <Image
                    src={item.movie_banner}
                    height={180}
                    width={292}
                    className="rounded-md"
                    alt={item.title}
                    layout="fixed"
                  />
                  <div className="absolute bottom-0 flex items-end w-full h-full transition-shadow rounded-b-md inner-shadow-bottom hover:inner-shadow-max ">
                    <h1 className="w-40 p-2 font-bold text-left text-gray-100">
                      {item.title}
                    </h1>
                  </div>
                </li>
              </Link>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TopMovies;
