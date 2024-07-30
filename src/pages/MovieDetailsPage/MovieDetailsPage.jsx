import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../../movies-api";

export default function MovieDetailsPage() {
  const [movieById, setMovieById] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/movies");
  // const backLinkHref = location.state ?? "/movies";

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

  if (!movieById) {
    return <h2>Loading...</h2>;
  }

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieById;

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  return (
    <div>
      {isLoading && <b>Loading movies...</b>}
      {isError && <p>Oooops. Try again, please!</p>}
      <p>
        <Link to={backLinkRef.current}>Go back</Link>
      </p>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div>
          <h1>{title}</h1>
          <p>({release_date})</p>
          <p>User score: {vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul>
            <li>
              <NavLink to="cast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <Suspense fallback={<div>Loading component...</div>}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
