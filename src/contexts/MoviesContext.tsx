import { createContext, useState } from "react";
import data from "../../data.json";

interface MoviesContextTypes {
  movies: IMovies[];
  setMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  tab: string;
  setTab: React.Dispatch<React.SetStateAction<string>>;
}

const DefaultValues = {
  movies: data,
  setMovies: () => {},
  search: "",
  setSearch: () => {},
  tab: "",
  setTab: () => {},
};

interface MoviesProviderProps {
  children: React.ReactNode;
}

const MoviesContext = createContext<MoviesContextTypes>(DefaultValues);

function MoviesContextProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>(data);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("");

  return (
    <MoviesContext.Provider
      value={{ movies, setMovies, search, setSearch, tab, setTab }}
    >
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContextProvider, MoviesContext };
