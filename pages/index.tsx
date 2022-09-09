import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MoviesList from "../components/movies/MoviesList";
import TopMovies from "../components/movies/TopMovies";
import Navbar from "../components/navigation/Navbar";
// Context/Global State
import MoviesState from "../context/Movies/MoviesState";
import { SearchState } from "../context/Search/SearchState";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ghibli Tracker 2.0</title>
        <meta
          name="Welcome to Ghibli Tracker 2.0: Track and rate all your favorites movies!"
          content=""
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>
        <SearchState>
          <main className="flex flex-col items-center justify-center">
            <MoviesList />
            <TopMovies />
          </main>
        </SearchState>
      </section>
    </>
  );
};

export default Home;
