import { useMovies } from "../contexts/useMovies";

export default function NavMovies() {
  const { movies } = useMovies();
  const categoryMovies = movies.filter((movie) => movie.category === "Movie");
  return <div></div>;
}
