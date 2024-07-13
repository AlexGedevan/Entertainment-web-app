import styled from "styled-components";

import navbookmark from "/assets/icon-nav-bookmark.svg";
import navHome from "/assets/icon-nav-home.svg";
import navTVseries from "/assets/icon-nav-tv-series.svg";
import navMovies from "/assets/icon-nav-movies.svg";
import logo from "/assets/logo.svg";
import avatarImg from "/assets/image-avatar.png";
import { useState } from "react";
import { useMovies } from "../contexts/useMovies";

export default function HomeHeader() {
  const { tab, setTab } = useMovies();
  return (
    <StyledHomeHeader>
      <img src={logo} alt="logo" />
      <NavBar tab={tab}>
        <img src={navHome} onClick={() => setTab("navHome")} />
        <img src={navMovies} onClick={() => setTab("navMovies")} />
        <img src={navTVseries} onClick={() => setTab("navTVseries")} />
        <img src={navbookmark} onClick={() => setTab("navbookmark")} />
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
    cursor: pointer;
  }
  & > img:nth-child(1) {
    filter: ${(props) =>
      props.tab === "navHome"
        ? "invert(97%) sepia(96%) saturate(8%) hue-rotate(241deg) brightness(153%) contrast(100%)"
        : "none"};
  }
  & > img:nth-child(2) {
    filter: ${(props) =>
      props.tab === "navMovies"
        ? "invert(97%) sepia(96%) saturate(8%) hue-rotate(241deg) brightness(153%) contrast(100%)"
        : "none"};
  }
  & > img:nth-child(3) {
    filter: ${(props) =>
      props.tab === "navTVseries"
        ? "invert(97%) sepia(96%) saturate(8%) hue-rotate(241deg) brightness(153%) contrast(100%)"
        : "none"};
  }
  & > img:nth-child(4) {
    filter: ${(props) =>
      props.tab === "navbookmark"
        ? "invert(97%) sepia(96%) saturate(8%) hue-rotate(241deg) brightness(153%) contrast(100%)"
        : "none"};
  }
`;
