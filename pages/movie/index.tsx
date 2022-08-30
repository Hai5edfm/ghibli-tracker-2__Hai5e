import React from "react";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Movie: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return (
    <>
      <h1>Hello world this is the route: {id}</h1>
    </>
  );
};

export default Movie;
