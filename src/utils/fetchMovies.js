// utils.js

/**
 * Fetch data from The Movie Database API
 * @param {string} endpoint - The API endpoint (e.g., "popular", "top_rated")
 * @returns {Promise} - A promise that resolves with the fetched data
 */
export const fetchMovies = async (endpoint) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
