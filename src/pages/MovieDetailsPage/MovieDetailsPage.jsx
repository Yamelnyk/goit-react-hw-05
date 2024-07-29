import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../movies-api";

export default function MovieDetailsPage() {
  const [movieById, setMovieById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieById() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getMovieById(movieId);
        setMovieById(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieById();
  }, [movieId]);

  console.log(movieById);
  return (
    <div>
      {isLoading && <b>Loading movies...</b>}
      {isError && <p>Oooops. Try again, please!</p>}
      <div>
        <p>{movieById.title}</p>
      </div>
    </div>
  );
}
