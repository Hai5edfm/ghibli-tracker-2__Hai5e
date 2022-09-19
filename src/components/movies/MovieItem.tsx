import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import Link from "next/link";

export default function MovieItem({ item }: any) {
  return (
    <li className="flex flex-col items-center justify-between h-auto m-4 transition-transform bg-white rounded-lg transform-gpu hover:scale-110 w-fit shadow-aesthetic">
      <Link href={"/movie/" + item.id}>
        <figure className="relative">
          <Image
            src={item.image}
            alt={item.title}
            width={184}
            height={260}
            className="rounded-t-lg cursor-pointer bg-slate-400"
          />
          <div className="absolute bottom-0 right-0 px-1 bg-blue-500 rounded-lg w-fit">
            <p className="text-white">{item.release_date}</p>
          </div>
        </figure>
      </Link>

      <h1 className="w-40 p-2 font-bold text-left text-gray-700">
        {item.title}
      </h1>
      <div className="flex items-stretch justify-around mx-2 w-fit">
        <div className="flex items-center justify-center">
          <AiFillStar className="text-xl text-yellow-400" />
          <p>{item.rt_score / 10}</p>
          <FaEye className="mx-1 mr-4 text-xl text-ghibli-light" />
        </div>
        <div className="flex items-center justify-center text-md">
          <AiOutlineClockCircle className="mx-1 text-ghibli-light"/>
          <p>{item.running_time}</p>
        </div>
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
