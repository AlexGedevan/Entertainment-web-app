import styled from "styled-components";
import Navbookmark from "/assets/icon-nav-bookmark.svg";
import NavHome from "/assets/icon-nav-home.svg";
import navTVseries from "/assets/icon-nav-tv-series.svg";
import navMovies from "/assets/icon-nav-movies.svg";
import logo from "/assets/logo.svg";
import avatarImg from "/assets/image-avatar.png";
import searchIcon from "/assets/icon-search.svg";
import TrendingMovies from "../components/TrendingMovies";

export default function Home() {
  return (
    <StyledHome>
      <HomeHeader>
        <img src={logo} alt="logo" />
        <NavBar>
          <img src={NavHome} />
          <img src={navMovies} />
          <img src={navTVseries} />
          <img src={Navbookmark} />
        </NavBar>
        <img src={avatarImg} alt="avatar" />
      </HomeHeader>
      <SearchBar>
        <img src={searchIcon} alt="search icon" />
        <input type="text" placeholder="Search for movies or TV series" />
      </SearchBar>
      <TrendingDiv>
        <h1>Trending</h1>
        <TrendingMovies />
      </TrendingDiv>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  width: 100vw;
  max-width: 50rem;
`;

const HomeHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161d2f;
  padding: 1.6rem;

  & > img:first-child {
    width: 2.5rem;
    height: 2rem;
  }

  & > img:last-child {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  gap: 2.4rem;

  & > img {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

const SearchBar = styled.div`
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
