import { useEffect, useState } from "react";
import "./App.css";
import { Form } from "./components/form/Form";
import { GetAllMovie, GetMovieByName } from "../api/MovieSeach";
import { MovieCards } from "./components/movieCards/MovieCards";
import { Title } from "./components/title/Title";

function App() {
  const [allMovie, setAllMovie] = useState([]);
  const [preValue, setPreValue] = useState("");
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    (!value ? GetAllMovie() : GetMovieByName(value))
      .then((res) => {
        setAllMovie(res);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load movies. Please try again.");
      });
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(preValue);
  };

  return (
    <>
      <Title text="Movie Explorer" className="movie-title" />
      {error && <div className="error">{error}</div>}
      <Form
        handleSubmit={handleSubmit}
        preValue={preValue}
        setPreValue={setPreValue}
        className="movie-form"
      />
      {allMovie.length === 0 && !error && value.trim() && (
        <div className="no-results">No movies found for "{value}".</div>
      )}
      <MovieCards dataMovie={allMovie} className="movie" />
    </>
  );
}

export default App;
