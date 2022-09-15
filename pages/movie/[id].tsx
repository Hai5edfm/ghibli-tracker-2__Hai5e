import { useRouter } from "next/router";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/Movies/MoviesContext";
import TopMovies from "../../components/movies/TopMovies";
import Navbar from "../../components/navigation/Navbar";
export default function Movie() {
  const { selectedMovie, getMovie, getMovies } = useContext(MoviesContext);
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    getMovie(id);
  }, []);

  if (getMovie.length)
    return (
      <>
        <Navbar />
        <main className="flex flex-col items-center">
          <div className="w-[80%] flex items-baseline">
            <h1 className="px-2 m-4 mr-0 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
              {selectedMovie?.title}
            </h1>
            <p>{selectedMovie?.release_date}</p>
          </div>
          <main className="grid grid-cols-1 grid-rows-1 gap-3 mx-auto bg-white rounded-md shadow-aesthetic w-[80%] h-fit p-4">
            <div
              id="video"
              className="w-full h-auto col-span-2 bg-gray-600"
            ></div>
            <section className="flex flex-col items-center">
              <Image
                src={selectedMovie?.image}
                alt={selectedMovie?.title}
                width={226}
                height={362}
                layout="fixed"
                className="rounded-md"
              />
              <div className="w-full m-4 text-left">
                <p className="border-b-[2px] p-1">
                  Producer: {selectedMovie?.producer}
                </p>
                <p className="border-b-[2px] p-1">
                  Director: {selectedMovie?.director}
                </p>
              </div>
            </section>
            <div className="col-span-3 w-[calc(100%-230px)]">
              <p className=" p-4 font-light text-gray-700 border-b-[2px]">
                {selectedMovie?.description}
              </p>
            </div>
            <div className="flex m-4 ">
              <div className="mx-4">{selectedMovie?.rt_score}</div>
              <div>ISWATCHED</div>
            </div>
            <a
              href="#"
              className="m-4 text-center text-blue-500 align-middle hover:underline"
            >
              wiki &gt;
            </a>
          </main>
          <TopMovies />
        </main>
      </>
    );
}
