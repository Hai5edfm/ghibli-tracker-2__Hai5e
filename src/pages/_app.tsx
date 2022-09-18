import "../styles/globals.css";
import type { AppProps } from "next/app";
// import MoviesState from "../context/Movies/MoviesState";
import dynamic from "next/dynamic";
import { Suspense } from "react";



const DynamicMoviesState =
  dynamic(() => import("../context/Movies/MoviesState"), {
    ssr: false,
    suspense: true,
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DynamicMoviesState>
        <Component {...pageProps} />
      </DynamicMoviesState>
    </Suspense>
  );
}

export default MyApp;
