import { Outlet } from "react-router-dom";
import HomeHeader from "./UI/HomeHeader";
import SearchBar from "./UI/SearchBar";

export default function AppLayout() {
  return (
    <>
      <HomeHeader />
      <SearchBar />
      <Outlet />
    </>
  );
}
