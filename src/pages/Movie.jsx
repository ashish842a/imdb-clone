// Movie.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../utils/fetchMovieDetails"; // Adjust the path according to your file structure

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const movieDetails = await fetchMovieDetails(id);
        setMovie(movieDetails);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getData();
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[80%]">
        <img
          className="w-full h-[500px] object-cover object-[0_35%]"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt="Movie Backdrop"
        />
      </div>
      <div className="flex w-[75%] items-center relative -bottom-56">
        <div className="mr-8">
          <img
            className="w-[300px] rounded-lg shadow-[0_22px_40px_6px_rgba(0,0,0,0.86)]"
            src={`https://image.tmdb.org/t/p/original${
              currentMovieDetail ? currentMovieDetail.poster_path : ""
            }`}
            alt="Movie Poster"
          />
        </div>
        <div className="flex flex-col justify-between h-[450px] text-white">
          <div className="space-y-2 text-shadow">
            <div className="font-semibold text-3xl">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div>{currentMovieDetail ? currentMovieDetail.tagline : ""}</div>
            <div className="flex items-center">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star ml-2" />
              <span className="ml-4">
                {currentMovieDetail
                  ? `(${currentMovieDetail.vote_count}) votes`
                  : ""}
              </span>
            </div>
            <div>
              {currentMovieDetail
                ? `${currentMovieDetail.runtime} mins`
                : ""}
            </div>
            <div>
              {currentMovieDetail
                ? `Release date: ${currentMovieDetail.release_date}`
                : ""}
            </div>
            <div className="flex flex-wrap gap-4 mt-5">
              {currentMovieDetail &&
                currentMovieDetail.genres &&
                currentMovieDetail.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="px-2 py-1 border-2 border-white rounded-2xl"
                  >
                    {genre.name}
                  </span>
                ))}
            </div>
          </div>
          <div className="mt-8">
            <div className="text-xl font-semibold mb-5">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-[75%] -bottom-28 relative">
        <div className="text-2xl font-semibold">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center px-8 py-2 bg-red-600 text-black font-bold rounded-2xl w-[150px] no-underline"
          >
            Homepage <i className="fas fa-external-link-alt ml-4" />
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={`https://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center px-8 py-2 bg-yellow-400 text-black font-bold rounded-2xl w-[150px] no-underline"
          >
            IMDb <i className="fas fa-external-link-alt ml-4" />
          </a>
        )}
      </div>
      <div className="text-2xl font-semibold mt-10">Production companies</div>
      <div className="flex justify-center items-end w-[85%] mb-16 flex-wrap gap-8">
        {currentMovieDetail &&
          currentMovieDetail.production_companies &&
          currentMovieDetail.production_companies.map((company) => (
            <span
              key={company.id}
              className="flex flex-col items-center justify-center"
            >
              {company.logo_path && (
                <>
                  <img
                    className="w-[200px] mb-4"
                    src={`https://image.tmdb.org/t/p/original${company.logo_path}`}
                    alt={company.name}
                  />
                  <span>{company.name}</span>
                </>
              )}
            </span>
          ))}
      </div>
    </div>
  );
};

export default Movie;
