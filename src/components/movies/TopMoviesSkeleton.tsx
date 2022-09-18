import React from "react";

export const TopMoviesSkeleton = () => {
  return (
    <>
      <div className="flex overflow-auto sm:overflow-hidden scroll-smooth ">
        <div className="min-w-[292px] h-[180px] animate-pulse bg-slate-400 m-4 max-w-none rounded-md"></div>
        <div className="min-w-[292px] h-[180px] animate-pulse bg-slate-400 m-4 max-w-none rounded-md"></div>
        <div className="min-w-[292px] h-[180px] animate-pulse bg-slate-400 m-4 max-w-none rounded-md"></div>
        <div className="min-w-[292px] h-[180px] animate-pulse bg-slate-400 m-4 max-w-none rounded-md"></div>
        <div className="min-w-[292px] h-[180px] animate-pulse bg-slate-400 m-4 max-w-none rounded-md"></div>
      </div>
    </>
  );
};
