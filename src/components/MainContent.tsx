import React from "react";
import { useMovies } from "../contexts/useMovies";
import styled from "styled-components";
import TrendingMovies from "./TrendingMovies";
import RecommendedForYou from "./RecommendedForYou";
import SearchedMovies from "./SearchedMovies";
import MoviesByTabCategoryComponent from "./MoviesByTabCategoryComponent";

export default function MainContent() {
  // const { tab, search, movies } = useMovies();
  // let moviesByTabCategory = [];
  // if (tab === "navMovies") {
  //   moviesByTabCategory = movies.filter((movie) => movie.category === "Movie");
  // } else if (tab === "navTVseries") {
  //   moviesByTabCategory = movies.filter(
  //     (movie) => movie.category === "TV Series"
  //   );
  // } else if (tab === "navbookmark") {
  //   moviesByTabCategory = movies.filter((movie) => movie.isBookmarked === true);
  // } else if (tab === "navHome") {
  //   moviesByTabCategory = movies.filter((movie) => movie.isTrending === true);
  // }
  return <></>;
}

const TrendingDiv = styled.div`
  margin-left: 1.6rem;
  margin-top: 2.4rem;
  & > h1 {
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.52rem;
    letter-spacing: -0.3125px;
    color: #ffffff;
  }
  & > div {
    margin-top: 1.6rem;
  }
`;
