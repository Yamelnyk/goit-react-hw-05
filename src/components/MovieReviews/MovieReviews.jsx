import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../movies-api";

export default function MovieReviews() {
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieReviews() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieReviews();
  }, [movieId]);

  if (!reviews) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <div>
      {isLoading && <b>Loading movies...</b>}
      {isError && <p>Oooops. Try again, please!</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
