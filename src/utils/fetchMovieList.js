// utils.js

const API_KEY = import.meta.env.VITE_API_KEY;
const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;



/**
 * Fetch a list of movies by type.
 * @param {string} type - The type of movies to fetch (e.g., "popular", "top_rated").
 * @returns {Promise<object[]>} - The list of movies.
 */
export const fetchMovieList = async (type) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${type ? type : "popular"}?api_key=${API_KEY}&language=en-US`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch movie list");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movie list:", error);
    throw error;
  }
};
