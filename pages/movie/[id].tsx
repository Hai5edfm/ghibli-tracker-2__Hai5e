import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import MoviesContext from "../../context/Movies/MoviesContext";
import TopMovies from "../../components/movies/TopMovies";
export default function Movie() {
  const { selectedMovie, getMovie, getMovies } = useContext(MoviesContext);
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    getMovie(id);
  }, []);

  return (
    <>
      <h1>{selectedMovie?.title}</h1>
      <p className="w-72">{selectedMovie?.description}</p>
      <img src={selectedMovie?.image} alt={selectedMovie?.title} width="300px" />
      <TopMovies></TopMovies>
    </>
  );
}
