import React from "react";
import styled from "styled-components";
import { useMovies } from "../contexts/useMovies";
import SearchedMovieItem from "./SearchedMovieItem";

export default function SearchedMovies() {
  const { search, movies } = useMovies();
  const searchedMovies = movies.filter((movie) =>
    movie.title?.toLowerCase().includes(search.toLowerCase())
  );
  console.log(searchedMovies, movies, search);

  return (
    <StyledSearchedMovies>
      <h1>Found 2 results for 'Earth'</h1>
      <SearchedMoviesDiv>
        {searchedMovies.map((movie) => (
          <SearchedMovieItem movie={movie} />
        ))}
      </SearchedMoviesDiv>
    </StyledSearchedMovies>
  );
}

const StyledSearchedMovies = styled.div`
  margin-top: 2.4rem;
  padding: 0 1.6rem 0 1.6rem;

  & > h1 {
    font-family: Outfit;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.52rem;
    letter-spacing: -0.3125px;
    color: white;
    margin-bottom: 2.4rem;
  }
`;

const SearchedMoviesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1.5rem;
  row-gap: 1.6rem;
`;
