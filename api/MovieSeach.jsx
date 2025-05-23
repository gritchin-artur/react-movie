import axios from "axios";

const Key = import.meta.env.VITE_API_KEY;
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export async function GetAllMovie() {
  const response = await axios.get(
    `/trending/movie/week?api_key=${Key}&page=1&language=en-US&include_adult=false`,
  );
  return response.data.results;
}

export async function GetMovieByName(movieName) {
  const response = await axios.get(
    `/search/movie?api_key=${Key}&query=${movieName}&include_adult=false&language=en-US&page=1`,
  );
  return response.data.results;
}
