import styled from "styled-components";

import TrendingMovies from "../components/TrendingMovies";
import RecommendedForYou from "../components/RecommendedForYou";
import { useMovies } from "../contexts/useMovies";
import SearchedMovies from "../components/SearchedMovies";
import NavMovies from "../components/NavMovies";

export default function Home() {
  const { search, tab } = useMovies();
  return (
    <StyledHome>
      {!search && tab === "navHome" && (
        <>
          <TrendingDiv>
            <h1>Trending</h1>
            <TrendingMovies />
          </TrendingDiv>
          <RecommendedForYou />
        </>
      )}
      {search && <SearchedMovies />}
      {!search && tab === "navMovies" && (
        <>
          <NavMovies />
        </>
      )}
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 100vw;
  max-width: 50rem;
  /* margin-left: 1.6rem; */
`;

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
