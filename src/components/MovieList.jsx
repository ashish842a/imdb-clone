// MovieList.js

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cards from "./Card";
import { fetchMovieList } from "../utils/fetchMovieList"; // Adjust the path according to your file structure

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, [type]);

  const getData = async () => {
    try {
      const movies = await fetchMovieList(type);
      setMovieList(movies);
    } catch (error) {
      console.error("Error fetching movie list:", error);
    }
  };

  return (
    <div className="px-12 pb-12">
      <h2 className="text-2xl font-semibold mb-10">
        {(type ? type : "POPULAR").toUpperCase()}
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {movieList.map((movie) => (
          <Cards key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
