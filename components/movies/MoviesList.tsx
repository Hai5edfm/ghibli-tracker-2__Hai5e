import React, { useEffect, useContext, useState } from "react";
import { useGetFilms } from "../../hooks/useGetFilms";
import { Searchbar } from "../navigation/Searchbar";
import { AiOutlineStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { BiFilter } from "react-icons/bi";

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
    <>
      <div className="my-7">
        <div className="flex flex-row justify-between px-5">
          <h1 className="px-2 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
            Movies
          </h1>
          <div className="flex items-center justify-center">
            <BiFilter className="mr-2 text-4xl text-ghibli-light" />
            <Searchbar moviesList={moviesList} setMoviesList={setMoviesList} />
          </div>
        </div>
        <div className="h-auto overflow-hidden overflow-x-auto">
          <ul
            className="flex flex-row  w-[4500px] p-2"
            onClick={(e) => {
              console.log(e.target);
            }}
          >
            {moviesList.length &&
              moviesList.map((item: any) => (
                <li
                  className="flex flex-col items-center justify-between h-auto m-4 transition-transform bg-white rounded-lg hover:scale-110 w-60 shadow-aesthetic"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={184}
                    height={260}
                    className="rounded-t-lg "
                  />

                  <h1 className="w-40 p-2 font-bold text-left text-gray-700">
                    {item.title}
                  </h1>
                  <div className="flex items-stretch justify-between w-fit">
                    <div className="flex">
                      <AiOutlineStar className="text-xl text-ghibli-light" />
                      <AiOutlineStar className="text-xl text-ghibli-light" />
                      <AiOutlineStar className="text-xl text-ghibli-light" />
                      <AiOutlineStar className="text-xl text-ghibli-light" />
                      <AiOutlineStar className="text-xl text-ghibli-light" />
                    </div>
                    <FaEye className="ml-4 text-xl text-ghibli-light" />
                  </div>

                  <Link href={"/movie/" + item.id}>
                    <a className="mt-4 transition-colors hover:bg-[#2772b8] rounded-sm text-center w-32 font-sans text-white bg-[#3599F4]">
                      <p className="">Details</p>
                    </a>
                  </Link>
                  <a className="mb-4 align-middle" href={item.url}>
                    Wiki
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MoviesList;
