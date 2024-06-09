import styled from "styled-components";

import Navbookmark from "/assets/icon-nav-bookmark.svg";
import NavHome from "/assets/icon-nav-home.svg";
import navTVseries from "/assets/icon-nav-tv-series.svg";
import navMovies from "/assets/icon-nav-movies.svg";
import logo from "/assets/logo.svg";
import avatarImg from "/assets/image-avatar.png";

export default function HomeHeader() {
  return (
    <StyledHomeHeader>
      <img src={logo} alt="logo" />
      <NavBar>
        <img src={NavHome} />
        <img src={navMovies} />
        <img src={navTVseries} />
        <img src={Navbookmark} />
      </NavBar>
      <img src={avatarImg} alt="avatar" />
    </StyledHomeHeader>
  );
}
const StyledHomeHeader = styled.div`
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
