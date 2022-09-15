// import type { NextPage } from "next";
import Head from "next/head";
// import Link from "next/link";
import MoviesList from "../components/movies/MoviesList";
// import TopMovies from "../components/movies/TopMovies";
import Navbar from "../components/navigation/Navbar";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// Context/Global State
// import MoviesState from "../context/Movies/MoviesState";
import { SearchState } from "../context/Search/SearchState";

// const DynamicMoviesList = dynamic(
//   () => import("../components/movies/MoviesList"),
//   { ssr: false, suspense: true }
// );

const DynamicTopMovies = dynamic(
  () => import("../components/movies/TopMovies"),
  { ssr: false, suspense: true }
);
const DynamicNavbar = dynamic(() => import("../components/navigation/Navbar"), {
  ssr: false,
  suspense: true,
});
// const DynamicSearchState = dynamic(() => import("../context/Search/SearchState"));
// const DynamicMovies = dynamic(() => import("../components/movies/MoviesList"));
// const DynamicMovies = dynamic(() => import("../components/movies/MoviesList"));

function Home() {
  return (
    <>
      <Head>
        <title>Ghibli Tracker 2.0</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <section>
        <SearchState>
          <main className="flex flex-col items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesList />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicTopMovies />
            </Suspense>
          </main>
        </SearchState>
      </section>
    </>
  );
}

export default Home;
