import React, { useContext, useEffect, useRef } from "react";
import MoviesContext from "../../context/Movies/MoviesContext";
import Image from "next/image";
import { LeftButton } from "./LeftButton";
import { RightButton } from "./RightButton";

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

  const carousel: any = useRef(null);
  const handleNext = (e: any) => {
    // Increase the pixel of translation
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  const handlePrevious = (e: any) => {
    e.preventDefault();
    // Decrease and reset
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

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
          {myArray.length > 0 &&
            myArray.map((item: any) => (
              <li
                key={item.id}
                className="relative m-4 transition-transform cursor-pointer hover:scale-110"
              >
                <Image
                  src={item.movie_banner}
                  height={180}
                  width={292}
                  className="rounded-md max-w-none"
                  alt={item.title}
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
