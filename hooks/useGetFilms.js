import { useEffect, useState } from "react";

const useGetFilms = () => {
  const [moviesList, setMoviesList] = useState([]);
  // Todo: separate this to /services
  useEffect(() => {
    console.count("mounted");
    const controller = new AbortController();
    const signal = controller.signal;
    // todo: add environment variable
    fetch("https://ghibliapi.herokuapp.com/films", { signal })
      .then((res) => res.json())
      .then((data) => {
        setMoviesList(data);
      })
      .catch((err) => console.log(err));
    return () => {
      console.count("unmounted");
      controller.abort();
    };
  }, []);

  return { moviesList, setMoviesList };
};

export { useGetFilms };
