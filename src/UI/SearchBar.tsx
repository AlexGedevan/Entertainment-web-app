import styled from "styled-components";
import searchIcon from "/assets/icon-search.svg";
import { useState } from "react";
import { useMovies } from "../contexts/useMovies";

export default function SearchBar() {
  const { search, setSearch } = useMovies();
  return (
    <StyledSearchBar>
      <img src={searchIcon} alt="search icon" />
      <input
        type="text"
        placeholder="Search for movies or TV series"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
    </StyledSearchBar>
  );
}

const StyledSearchBar = styled.div`
  width: 25.7rem;
  display: flex;
  gap: 1.6rem;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2.4rem;
  margin-left: 1.6rem;
  & > img {
    width: 2.4rem;
    height: 2.4rem;
  }

  & > input {
    width: 100%;
    background-color: transparent;
    border: none;
    outline: none;

    color: white;
    &::placeholder {
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 2.016rem;
    }
  }
`;
