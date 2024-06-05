import { createContext, useState } from "react";
import data from "../../data.json";

interface MoviesContextTypes {
  movies: IMovies[];
  setMovies: React.Dispatch<React.SetStateAction<IMovies[]>>;
}

const DefaultValues = {
  movies: data,
  setMovies: () => {},
};

interface MoviesProviderProps {
  children: React.ReactNode;
}

const MoviesContext = createContext<MoviesContextTypes>(DefaultValues);

function MoviesContextProvider({ children }: MoviesProviderProps) {
  const [movies, setMovies] = useState<IMovies[]>(data);

  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export { MoviesContextProvider, MoviesContext };
