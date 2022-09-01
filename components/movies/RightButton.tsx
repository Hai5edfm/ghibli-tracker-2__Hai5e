import React from "react";
import { AiFillLeftCircle } from "react-icons/ai";


export function RightButton({ carousel }: any) {
  const handleNext = (e: any) => {
    // Increase the pixel of translation
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <button
      onClick={handleNext}
      className="sm:block hidden absolute z-10 rounded-full w-fit h-fit -right-12 top-[50%] text-4xl text-ghibli-light bg-transparent hover:text-ghibli-dark transition-color"
    >
      <AiFillLeftCircle className="rotate-180" />
    </button>
  );
}
