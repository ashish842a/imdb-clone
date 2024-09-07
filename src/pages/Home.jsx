import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel"; // Correct position for Carousel import
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Ensure CSS import comes after component imports
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
    )
      .then((res) => res.json())
      .then((data) => setPopularMovies(data.results));
  }, []);

  return (
    <>
      <div className="relative">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              key={movie.id}
              to={`/movie/${movie.id}`}
              className="text-white no-underline"
            >
              <div className="relative h-[600px]">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={movie.original_title}
                  className="block mx-auto w-full"
                />
              </div>
              <div className="absolute bottom-0 flex flex-col items-start justify-end w-full h-[70%] p-20 bg-gradient-to-t from-black to-transparent opacity-100 transition-opacity duration-300 hover:opacity-100">
                <div className="font-black text-4xl mb-1.5 text-left">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="text-2xl mb-4">
                  {movie ? movie.release_date : ""}
                  <span className="ml-12">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star"></i>{" "}
                  </span>
                </div>
                <div className="italic text-sm mb-1 text-left flex w-1/2">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
        <MovieList />
      </div>
    </>
  );
};

export default Home;
