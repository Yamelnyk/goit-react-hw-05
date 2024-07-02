import { useState, useEffect } from "react";
import { getMoviesTrending } from "../../movies-api";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getMoviesTrending();
        setMovies(data.results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return <h2>Trending today</h2>;
}
