import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="inline-block relative rounded-lg overflow-hidden m-0.5 cursor-pointer min-w-[200px] h-[300px] border border-gray-600 z-0">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        <Link
          to={`/movie/${movie.id}`}
          className="text-white no-underline"
        >
          <div className="inline-block relative rounded-lg overflow-hidden m-0.5 cursor-pointer min-w-[200px] h-[300px] border border-gray-600 z-0 transition-transform duration-200 hover:scale-110 hover:z-[1000] hover:shadow-xl hover:shadow-black/25">
            <img
              className="h-full w-full object-cover"
              src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`}
              alt={movie?.original_title || "Movie Poster"}
            />
            <div className="absolute bottom-0 w-[85%] h-[290px] flex flex-col justify-end p-4 bg-gradient-to-t from-black/100 to-black/0 opacity-0 transition-opacity duration-200 hover:opacity-100">
              <div className="font-black text-lg mb-1">
                {movie ? movie.original_title : ""}
              </div>
              <div className="text-sm mb-1">
                {movie ? movie.release_date : ""}
                <span className="float-right">
                  {movie ? movie.vote_average : ""}
                  <i className="fas fa-star ml-1" />
                </span>
              </div>
              <div className="italic text-sm mb-1">
                {movie ? movie.overview.slice(0, 118) + "..." : ""}
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Cards;
