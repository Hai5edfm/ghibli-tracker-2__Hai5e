import { UserProfile } from "../user/UserProfile";
import Link from "next/link";
import React, { useState } from "react";
import { Login } from "../auth/Login";

const Navbar: React.FC = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  return (
    <>
      <div className="z-50 inline-flex justify-center w-full h-12 mb-4 custom-shadow bg-navbar">
        <Link href="/">
          <h1 className="py-2 text-lg leading-none text-center cursor-pointer text-slate-50">
            Ghibli
            <br />
            Tracker
          </h1>
        </Link>
        <div
          className="absolute text-white cursor-pointer right-14 top-3 hover:underline"
          onClick={() => {
            setOpenLoginModal(!openLoginModal);
          }}
        >
          Login
        </div>
        <UserProfile />
      </div>
      {/* <Login
        openLoginModal={openLoginModal}
        setOpenLoginModal={setOpenLoginModal}
      /> */}
    </>
  );
};

export default Navbar;
