import styled from "styled-components";
import bookmarkIcon from "/assets/icon-bookmark-empty.svg";
import categoryMoviesIcon from "/assets/icon-category-movie.svg";

interface IRecommendedMovieItem {
  movie: IMovies;
}
export default function RecommendedMovieItem({ movie }: IRecommendedMovieItem) {
  return (
    <StyledRecommendedMovieItem>
      <Poster>
        <img
          src={movie.thumbnail?.regular?.large?.slice(1)}
          alt="movie thumbnail"
        />
        <BookmarkDiv>
          <img src={bookmarkIcon} alt="bookmark" />
        </BookmarkDiv>
      </Poster>
      <MovieDetails>
        <MovieDescription>
          <p>{movie.year}</p>
          <StyledDot />
          <MovieCategory>
            <img src={categoryMoviesIcon} alt="category icon" />
            <p>{movie.category}</p>
          </MovieCategory>
          <p>{movie.rating}</p>
        </MovieDescription>
        <h1>{movie.title}</h1>
      </MovieDetails>
    </StyledRecommendedMovieItem>
  );
}

const StyledRecommendedMovieItem = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 16.4rem;
  /* height: 15.4rem; */
`;

const Poster = styled.div`
  /* display: flex; */
  /* justify-content: flex-end; */

  position: relative;
  height: 11rem;
  & > img:first-child {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -100;
    border-radius: 1rem;
  }
  & > img:last-child {
  }
`;

const BookmarkDiv = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10000px;
  width: 3.2rem;
  height: 3.2rem;
  background-color: rgba(16, 20, 30, 0.5);
  align-self: flex-end;
  margin-top: 8px;
  margin-right: 8px;
`;

const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h1 {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.764rem;
    color: white;
  }
`;

const MovieDescription = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  & > p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.386rem;
    color: white;
  }
`;

const MovieCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  & > p {
    font-size: 11px;
    font-weight: 400;
    line-height: 13.86px;
    color: white;
  }
`;
const StyledDot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 10000px;
  background-color: #ffffff;
`;
