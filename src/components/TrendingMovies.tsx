import styled from "styled-components";

import TrendingMovieItem from "./TrendingMovieItem";
import { useMovies } from "../contexts/useMovies";

export default function TrendingMovies() {
  const { movies, setMovies } = useMovies();
  const trendingMovies = movies.filter((movie) => movie.isTrending);
  return (
    <StyledTrendingMovies>
      {trendingMovies.map((movie: IMovies) => (
        <TrendingMovieItem movie={movie} />
      ))}
    </StyledTrendingMovies>
  );
}

const StyledTrendingMovies = styled.div`
  width: 100%;
  display: flex;
  gap: 1.6rem;
  overflow-x: auto;
`;
