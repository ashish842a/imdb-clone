import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center m-0 px-10 py-2">
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-20 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt="IMDB Logo"
          />
        </Link>
        <Link to="/movies/popular" className="text-white text-lg mx-7 cursor-pointer hover:text-red-500 no-underline">
          Popular
        </Link>
        <Link to="/movies/top_rated" className="text-white text-lg mx-7 cursor-pointer hover:text-red-500 no-underline">
          Top Rated
        </Link>
        <Link to="/movies/upcoming" className="text-white text-lg mx-7 cursor-pointer hover:text-red-500 no-underline">
          Upcoming
        </Link>
      </div>
    </div>
  );
};

export default Header;
