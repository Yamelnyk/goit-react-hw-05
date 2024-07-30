import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { getMovieSearch } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useLocation, useSearchParams } from "react-router-dom";

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();

  const movieFilter = searchParams.get("query") ?? "";

  useEffect(() => {
    async function fetchMovieName() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getMovieSearch(movieFilter);
        setSearchMovies(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchMovieName();
  }, [movieFilter]);

  const handleSearch = (movieName) => {
    if (!movieName) {
      // Очистка URL від некрасивого параметру
      return setSearchParams({});
    }
    searchParams.set("query", movieName);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} movieFilter={movieFilter} />
      <div>
        {isLoading && <b>Loading movies...</b>}
        {isError && <p>Oooops. Try again, please!</p>}
        {!searchMovies ? (
          <h2>Loading...</h2>
        ) : (
          <MovieList movies={searchMovies} />
        )}
      </div>
    </div>
  );
}
