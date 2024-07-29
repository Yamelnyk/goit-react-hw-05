import { useParams } from "react-router-dom";
import { getMovieCasts } from "../../movies-api";
import { useEffect, useState } from "react";

export default function MovieCast() {
  const [casts, setCasts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieСast() {
      try {
        setIsLoading(true);
        setIsError(false);

        const data = await getMovieCasts(movieId);
        setCasts(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchMovieСast();
  }, [movieId]);

  if (!casts) {
    return <h2>Loading...</h2>;
  }

  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

  // const { profile_path } = casts;
  return (
    <div>
      {isLoading && <b>Loading movies...</b>}
      {isError && <p>Oooops. Try again, please!</p>}
      <div>
        <div>
          <ul>
            {casts.map(({ id, name, profile_path, character }) => (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  width={150}
                  alt="poster"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
