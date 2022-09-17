import Head from "next/head";
import dynamic from "next/dynamic";
import { Suspense } from "react";
// Context/Global State
import { SearchState } from "../context/Search/SearchState";
import { NextPage } from "next";

const DynamicMoviesList = dynamic(
  () => import("../components/movies/MoviesList"),
  { ssr: false, suspense: true }
);

const DynamicTopMovies = dynamic(
  () => import("../components/movies/TopMovies"),
  { ssr: false, suspense: true }
);
const DynamicNavbar = dynamic(() => import("../components/navigation/Navbar"), {
  ssr: false,
  suspense: true,
});
// const DynamicMovies = dynamic(() => import("../components/movies/MoviesList"));

const Home: NextPage = () => {
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
      <Suspense fallback={<div>Loading...</div>}>
        <DynamicNavbar />
      </Suspense>
      <section>
        <SearchState>
          <main className="flex flex-col items-center justify-center">
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicMoviesList />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <DynamicTopMovies />
            </Suspense>
          </main>
        </SearchState>
      </section>
    </>
  );
};

export default Home;
