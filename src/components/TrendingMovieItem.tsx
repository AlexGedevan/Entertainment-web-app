import styled from "styled-components";
import bookmarkIcon from "/assets/icon-bookmark-empty.svg";
import categoryMoviesIcon from "/assets/icon-category-movie.svg";
interface ITrendingMovieItem {
  movie: IMovies;
}

export default function TrendingMovieItem({ movie }: ITrendingMovieItem) {
  console.log(movie.thumbnail?.trending?.small);
  return (
    <StyledTrendingMovieItem movie={movie}>
      {/* <img src="/assets/thumbnails/beyond-earth/trending/small.jpg" /> */}
      <img src={movie.thumbnail?.trending?.small?.slice(1)} alt="thumbnail" />
      <BookmarkDiv>
        <img src={bookmarkIcon} alt="bookmark" />
      </BookmarkDiv>
      <MovieContent>
        <MovieDetails>
          <p>{movie.year}</p>
          <StyledDot />
          <MovieCategory>
            <img src={categoryMoviesIcon} alt="category icon" />
            <p>{movie.category}</p>
          </MovieCategory>
          <StyledDot />
          <p>{movie.rating}</p>
        </MovieDetails>
        <p>{movie.title}</p>
      </MovieContent>
    </StyledTrendingMovieItem>
  );
}

const StyledTrendingMovieItem = styled.div<{ movie: IMovies }>`
  color: white;
  position: relative;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  gap: 4.6rem;
  min-width: 24rem;
  height: 14rem;
  /* padding: 0.8rem 0.8rem 1.6rem 1.6rem; */
  /* background-image: ${(props) =>
    `url(${props.movie.thumbnail?.trending?.small})`}; */
  & > img:first-child {
    position: absolute;
    z-index: -100;
    width: 100%;
    border-radius: 1rem;
  }
`;

const MovieDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  & > p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.512rem;
  }
`;

const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 1.6rem;

  & > p {
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.89rem;
  }
`;

const StyledDot = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 10000px;
  background-color: #ffffff;
`;

const MovieCategory = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  & > p {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.512rem;
  }
`;

const BookmarkDiv = styled.div`
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
