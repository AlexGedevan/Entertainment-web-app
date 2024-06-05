import { useContext } from "react";
import { MoviesContext } from "./MoviesContext";

function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) throw new Error("Context was used outside the box");
  return context;
}

export { useMovies };
