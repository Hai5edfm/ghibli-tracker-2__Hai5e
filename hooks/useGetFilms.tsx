import { SetStateAction, useEffect, useState } from "react";
import dynamic from "next/dynamic";
interface useGetFilmsProps {
  moviesList: any;
  setMoviesList: any;
}
function useGetFilms() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Todo: separate this to /services
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    // todo: add environment variable
    fetch("https://ghibliapi.herokuapp.com/films", { signal })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        setMoviesList(data);
      })
      .catch((err) => console.log(err));
    return () => {
      controller.abort();
    };
  }, []);

  return { moviesList, setMoviesList, isLoading, setIsLoading };
}

export { useGetFilms };
