import React, { useEffect, useState } from "react";
import { MovieServ } from "../../service/movieService";
import CardMovie from "./CardMovie";

export default function ListMovie() {
  const [movieList, setMovieList] = useState();
  useEffect(() => {
    MovieServ.getMovie()
      .then((res) => {
        // console.log(res);
        setMovieList(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container ">
      <div className="grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-4 xl:grid-cols-4 gap-10 pt-10  mx-auto ">
        {movieList?.map((movie, index) => {
          return <CardMovie key={index} movie={movie} />;
        })}
      </div>
    </div>
  );
}
