import "../styles/globals.css";
import type { AppProps } from "next/app";
import MoviesState from "../context/Movies/MoviesState";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoviesState>
      <Component {...pageProps} />
    </MoviesState>
  );
}

export default MyApp;
