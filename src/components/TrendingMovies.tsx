import styled from "styled-components";

import TrendingMovieItem from "./TrendingMovieItem";
import { useMovies } from "../contexts/useMovies";

export default function TrendingMovies() {
  const { movies, setMovies } = useMovies();
  return (
    <StyledTrendingMovies>
      {movies.map((movie: IMovies) => (
        <TrendingMovieItem movie={movie} />
      ))}
    </StyledTrendingMovies>
  );
}

const StyledTrendingMovies = styled.div``;
