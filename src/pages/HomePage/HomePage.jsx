import { useState, useEffect } from "react";
import { getMoviesTrending } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation } from "react-router-dom";

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const location = useLocation();

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getMoviesTrending();
        setMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {isLoading && <b>Loading movies...</b>}
      {isError && <p>Oooops. Try again, please!</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}
