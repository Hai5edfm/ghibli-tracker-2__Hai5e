import React from "react";
import { AiFillLeftCircle } from "react-icons/ai";

export function LeftButton({ carousel }: any) {
  const handlePrevious = (e: any) => {
    e.preventDefault();
    // Decrease and reset
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  return (
    <button
      onClick={handlePrevious}
      className="sm:block hidden absolute z-10 rounded-full w-fit h-fit -left-12 top-[50%] text-4xl text-ghibli-light bg-transparent hover:text-ghibli-dark transition-color"
    >
      <AiFillLeftCircle />
    </button>
  );
}
