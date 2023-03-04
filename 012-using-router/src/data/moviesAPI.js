import { KEY } from "../constants/secret";

async function fetchMovies() {
  try {
    const fetchingMovies = await fetch(
      `https://api.themoviedb.org/3/list/1?api_key=${KEY}&language=pt-BR`
    );
    const movies = await fetchingMovies.json();

    return movies.items;
  } catch (error) {}
}

export default fetchMovies;
