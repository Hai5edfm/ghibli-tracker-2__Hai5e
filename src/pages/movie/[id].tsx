import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
// Components
import { MoviesContext } from "../../context/Movies/MoviesContext";
import TopMovies from "../../components/movies/TopMovies";
import Navbar from "../../components/navigation/Navbar";
// Icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { RateMovieModal } from "../../components/movies/RateMovieModal";

export default function Movie() {
  const { selectedMovie, getMovie, getMovies } = useContext(MoviesContext);
  const [stateModal, setStateModal] = useState(false);
  const router = useRouter();
  const id = router.query.id as string;

  useEffect(() => {
    getMovie(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  console.log(getMovie, "object");

  if (getMovie)
    return (
      <>
        <Head>
          <title>{selectedMovie?.title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {stateModal && <RateMovieModal setStateModal={setStateModal} />}
        <Navbar />
        <main className="flex flex-col items-center">
          <div className="w-full sm:w-[80%] flex items-baseline">
            <h1 className="px-2 m-4 mr-0 text-2xl font-normal align-middle border-l-4 border-ghibli-dark">
              {selectedMovie?.title}
            </h1>
            <p>{selectedMovie?.release_date}</p>
          </div>
          <main className="flex flex-col sm:grid sm:grid-cols-1 sm:grid-rows-1 sm:gap-3 mx-auto bg-white rounded-md shadow-aesthetic w-full sm:w-[80%] h-fit sm:p-4">
            <div
              id="video"
              className="col-span-2 bg-gray-600 w-full sm:min-w-[500px] aspect-video sm:order-1"
            >
              <iframe
                className="w-full h-full"
                src={selectedMovie?.url_youtube}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>
            <section className="flex items-start order-4 p-2 sm:items-center sm:flex-col sm:order-2 sm:p-0">
              <figure className="order-2 w-52 sm:order-1 sm:w-auto">
                <Image
                  src={selectedMovie?.image}
                  alt={selectedMovie?.title}
                  width={226}
                  height={362}
                  className="rounded-md"
                />
              </figure>
              <div className="w-full m-2 text-left sm:m-4 sm:order-2">
                <p className="border-b-[2px] sm:p-1 p-0 max-w-[200px]">
                  Producer: {selectedMovie?.producer}
                </p>
                <p className="border-b-[2px] sm:p-1 p-0">
                  Director: {selectedMovie?.director}
                </p>
              </div>
            </section>
            <div className="col-span-3 w-full sm:w-[calc(100%-230px)] sm:order-3 order-2">
              <p className=" p-4 font-light text-gray-700 border-b-[2px]">
                {selectedMovie?.description}
              </p>
            </div>
            <div className="flex justify-between order-3 m-4 sm:order-4">
              <div className="flex mx-4">
                {/* {selectedMovie?.rt_score}
                 */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <AiFillStar className="text-3xl text-yellow-400 " />
                    <p>{selectedMovie?.rt_score / 10}</p>
                  </div>
                  <div
                    onClick={() => {
                      setStateModal(true);
                      document.body.style.overflow = "hidden";
                    }}
                    className="flex items-center justify-center p-1 mx-2 transition-colors rounded-full cursor-pointer hover:bg-slate-100"
                  >
                    <AiOutlineStar className="text-3xl text-yellow-400 " />
                    {/* <p>{selectedMovie?.rt_score / 10}</p> */}
                  </div>
                  <div className="p-1 ml-4 text-2xl rounded-xl ">
                    <FaEye className="text-3xl text-ghibli-light" />
                  </div>
                </div>
              </div>
              <a
                href="#"
                className="order-5 text-center text-blue-500 align-middle hover:underline"
              >
                wiki &gt;
              </a>
            </div>
          </main>
          <TopMovies />
        </main>
      </>
    );
}
