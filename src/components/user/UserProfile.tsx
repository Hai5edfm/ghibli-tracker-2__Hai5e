import React, { useRef, useState } from "react";
import { FaUserAstronaut } from "react-icons/fa";

const signTip = `sm:after:content-[""] sm:after:h-0 sm:after:w-0 sm:after:border-b-[15px] sm:after:border-l-[10px] sm:after:border-r-[10px] sm:after:border-r-transparent sm:after:border-l-transparent sm:after:border-b-white sm:after:-top-3 sm:after:right-2 sm:after:absolute sm:after:border-solid`;

export function UserProfile({}) {
  const [isActive, setIsActive] = useState(false);
  const menu = useRef(null);

  function disablingScroll() {
    document.body.style.overflow = "hidden";
  }
  function enablingScroll() {
    document.body.style.overflow = "visible";
  }
  return (
    <>
      <FaUserAstronaut
        onClick={() => {
          setIsActive(!isActive);
          isActive === true ? enablingScroll() : disablingScroll();
        }}
        className="absolute m-2 text-3xl transition-colors cursor-pointer right-2 text-slate-50 hover:opacity-90"
      />
      <ul
        className={`${
          isActive
            ? "opacity-100 w-[80%] p-4 h-screen sm:h-80 sm:w-fit"
            : " w-0 p-0 m-0 opacity-0 invisible"
        } z-50 sm:right-5 ${signTip} top-12 right-0  sm:top-14 absolute transition-all sm:rounded-md bg-white shadow-aesthetic`}
      >
        {isActive && (
          <>
            <p className="mx-2 text-xl font-bold">Account</p>
            <li>
              <button className="m-2 text-lg">Profile</button>
            </li>
            <li>
              <button className="m-2 text-lg">Your movies rated</button>
            </li>
            <p className="mx-2 text-xl font-bold ">Development</p>
            <li>
              <button className="m-2 text-lg">Docs</button>
            </li>
            <li>
              <button className="m-2 text-lg">Are you admin?</button>
            </li>
            <li>
              <button className="m-2 text-lg">about</button>
            </li>
          </>
        )}
      </ul>
      {isActive && (
        <div
          onClick={() => {
            setIsActive(false);
            enablingScroll();
          }}
          className="absolute bottom-0 z-20 w-screen h-[calc(100vh-48px)] transition-all opacity-100 backdrop-blur-sm"
        ></div>
      )}
    </>
  );
}
