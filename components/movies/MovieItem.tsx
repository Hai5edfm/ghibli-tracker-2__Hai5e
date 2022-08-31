import React from "react";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

export function MovieItem({ item }: any) {
  return (
    <li
      className="flex flex-col items-center justify-between h-auto m-4 transition-transform bg-white rounded-lg hover:scale-110 w-60 shadow-aesthetic"
      key={item.id}
    >
      <Image
        src={item.image}
        alt={item.title}
        width={184}
        height={260}
        className="rounded-t-lg "
      />

      <h1 className="w-40 p-2 font-bold text-left text-gray-700">
        {item.title}
      </h1>
      <div className="flex items-stretch justify-between w-fit">
        <div className="flex">
          <AiOutlineStar className="text-xl text-ghibli-light" />
          <AiOutlineStar className="text-xl text-ghibli-light" />
          <AiOutlineStar className="text-xl text-ghibli-light" />
          <AiOutlineStar className="text-xl text-ghibli-light" />
          <AiOutlineStar className="text-xl text-ghibli-light" />
        </div>
        <FaEye className="ml-4 text-xl text-ghibli-light" />
      </div>

      <Link href={"/movie/" + item.id}>
        <a className="mt-4 transition-colors hover:bg-[#2772b8] rounded-sm text-center w-32 font-sans text-white bg-[#3599F4]">
          <p className="">Details</p>
        </a>
      </Link>
      <a className="mb-4 align-middle" href={item.url}>
        Wiki
      </a>
    </li>
  );
}
