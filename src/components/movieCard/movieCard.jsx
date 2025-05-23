import "./movieCard.css";

export const MovieCard = ({ movie, className }) => {
  return (
    <li key={movie.id} className={`${className}-card`}>
      <h2 className={`${className}-name`}>{movie.title}</h2>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : "https://www.reelviews.net/resources/img/default_poster.jpg"
        }
        alt={movie.title}
        className={`${className}-img`}
      />
      <div className={`${className}-team-container`}>
        <h3 className={`${className}-original_language`}>
          Original Language: {movie.original_language}
        </h3>
        <h3 className={`${className}-popularity`}>
          Popularity: {movie.popularity}
        </h3>
        <h3 className={`${className}-release`}>
          Release date: {movie.release_date}
        </h3>
        <h3 className={`${className}-rating`}>
          Rating score: {movie.vote_average}
        </h3>
      </div>
      <p className={`${className}-description`}>
        Description: {movie.overview}
      </p>
    </li>
  );
};
