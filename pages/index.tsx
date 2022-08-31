import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import MoviesList from "../components/movies/MoviesList";
import TopMovies from "../components/movies/TopMovies";
import Navbar from "../components/navigation/Navbar";
// Context/Global State
import MoviesState from "../context/Movies/MoviesState";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ghibli Tracker 2.0</title>
        <meta
          name="description"
          content="Welcome to Ghibli Tracker 2.0: Track and rate all your favorites movies!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section>
        <MoviesState>
          <main className="flex flex-col items-center justify-center">
            <MoviesList />
            <TopMovies />
          </main>
        </MoviesState>
      </section>
    </>
  );
};

export default Home;
