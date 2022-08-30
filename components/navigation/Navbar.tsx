import React from "react";
import { FaUserAstronaut } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="relative inline-flex justify-center w-full h-12 mb-4 custom-shadow bg-navbar">
        <h1 className="pt-1 text-lg leading-none text-center text-slate-50">
          Ghibli
          <br />
          Tracker
        </h1>
      <FaUserAstronaut className="absolute m-2 text-3xl right-2 text-slate-50" />
      </div>
    </>
  );
};

export default Navbar;
