import React, { FC } from "react";

export const Login: FC = ({ openLoginModal, setOpenLoginModal }: any) => {
  return (
    <>
      {openLoginModal &&
      <><div className="absolute z-50 flex items-center justify-center w-40 h-40 bg-white rounded-md shadow-aesthetic"></div><div className="absolute top-0 z-20 flex items-center justify-center w-screen h-screen bg-black opacity-50"></div></>
      }
    </>
  );
};
