import { UserProfile } from "../user/UserProfile";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="z-50 inline-flex justify-center w-full h-12 mb-4  custom-shadow bg-navbar">
        <Link href="/">
          <h1 className="py-2 text-lg leading-none text-center cursor-pointer text-slate-50">
            Ghibli
            <br />
            Tracker
          </h1>
        </Link>
        <UserProfile />
      </div>
    </>
  );
};

export default Navbar;
