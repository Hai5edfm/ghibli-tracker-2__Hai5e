import React, { useState } from "react";
import { BiFilter } from "react-icons/bi";
export function Filter({}) {
  const [isActivated, setIsActivated] = useState(false);
  return (
    <div className="relative flex mx-1 w-fit">
      <BiFilter
        className="text-4xl transition-colors cursor-pointer m text-ghibli-light hover:text-gray-600"
        onClick={() => {
          setIsActivated((prevState) => !prevState);
        }}
      />
      <ul
        className={`transition-all  flex justify-center items-center ${
          isActivated ? "w-60 mr-4 " : "opacity-0 w-0"
        }`}
      >
        {isActivated && (
          <>
            <li className="mx-2">Rate</li>
            <li className="mx-2">Watched</li>
            <li className="mx-2">Relevance</li>
          </>
        )}
      </ul>
    </div>
  );
}
