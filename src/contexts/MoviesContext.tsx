import { createContext, useEffect, useState } from "react";
import data from "../../data.json";

interface MoviesContextTypes {
  movies: IMovies[];
  setMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
  moviesByTabCategorie: Array<IMovies>;
  setMoviesByTabCategorie: React.Dispatch<React.SetStateAction<Array<IMovies>>>;
}

const DefaultValues = {
  movies: data,
  setMovies: () => {},
  search: "",
  setSearch: () => {},
  tab: "",
  setTab: () => {},
  moviesByTabCategorie: [],
  setMoviesByTabCategorie: () => {},
};

interface MoviesProviderProps {
  children: React.ReactNode;
}

const MoviesContext = createContext<MoviesContextTypes>(DefaultValues);

function MoviesContextProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>(data);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("");
  const [moviesByTabCategorie, setMoviesByTabCategorie] = useState([]);

  useEffect(
    function () {
      if (tab === "navMovies") {
        setMoviesByTabCategorie(
          movies.filter((movie) => movie.category === "Movie")
        );
      } else if (tab === "navTVseries") {
        setMoviesByTabCategorie(
          movies.filter((movie) => movie.category === "TV Series")
        );
      } else if (tab === "navbookmark") {
        setMoviesByTabCategorie(
          movies.filter((movie) => movie.isBookmarked === true)
        );
      } else if (tab === "navHome") {
        setMoviesByTabCategorie(
          movies.filter(
            (movie) => "thumbnail" in movie && !("trending" in movie.thumbnail)
          )
        );
      }
    },
    [tab, movies]
  );

  return (
    <MoviesContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
        tab,
        setTab,
        moviesByTabCategorie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContextProvider, MoviesContext };
