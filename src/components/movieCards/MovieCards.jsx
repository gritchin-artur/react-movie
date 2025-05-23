import { MovieCard } from "../movieCard/MovieCard";
import "./MovieCards.css";

export const MovieCards = ({ dataMovie, className }) => {
  return dataMovie ? (
    <ul className={`${className}-list`}>
      {dataMovie.map((movie) => {
        return <MovieCard movie={movie} className={className} key={movie.id} />;
      })}
    </ul>
  ) : (
    <div>Loading...</div>
  );
};
