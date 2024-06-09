import styled from "styled-components";
import { useMovies } from "../contexts/useMovies";
import RecommendedMovieItem from "./RecommendedMovieItem";

export default function RecommendedMovies() {
  const { movies } = useMovies();
  const recommendedMovies = movies.filter(
    (movie) => "thumbnail" in movie && !("trending" in movie.thumbnail)
  );

  return (
    <StyledRecommendedMovies>
      {recommendedMovies.map((movie: IMovies) => (
        <RecommendedMovieItem key={movie.title} movie={movie} />
      ))}
    </StyledRecommendedMovies>
  );
}

const StyledRecommendedMovies = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.6rem;
`;
