import React, { ReactComponentElement, SetStateAction, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
export const RateMovieModal = ({ setStateModal }: any) => {
  return (
    <>
      <div
        className="absolute z-20 w-full h-full bg-black/50 backdrop-blur-sm"
        onClick={() => {
          setStateModal(false);
          document.body.style.overflow = "visible";
        }}
      ></div>
      <div className="absolute rounded-lg p-4 z-40 bg-white w-auto h-auto top-[40%] left-[40%] ">
        <span
          className="absolute right-0 text-white cursor-pointer -top-8"
          onClick={() => {
            setStateModal(false);
            document.body.style.overflow = "visible";
          }}
        >
          X
        </span>
        <div className="absolute -top-12 text-ghibli-light  left-[40%] text-7xl">
          <span className="absolute text-3xl text-white top-[25%] left-[40%]">
            ?
          </span>
          <AiFillStar />
        </div>
        <h1 className="text-center">Rate this Movie</h1>
        <div className="flex p-6 text-3xl">
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
          <AiOutlineStar />
        </div>
      </div>
    </>
  );
};
