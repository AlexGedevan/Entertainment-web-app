import styled from "styled-components";
import RecommendedMovies from "./RecommendedMovies";

export default function RecommendedForYou() {
  return (
    <StyledRecommendedForYou>
      <h1>Recommended for you</h1>
      <RecommendedMovies />
    </StyledRecommendedForYou>
  );
}

const StyledRecommendedForYou = styled.div`
  width: 100%;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  margin-top: 2.4rem;
  & > h1 {
    margin-bottom: 2.4rem;
    color: white;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.52rem;
    letter-spacing: -0.3125px;
  }
`;
