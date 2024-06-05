interface ITrendingMovieItem {
  movie: IMovies;
}

export default function TrendingMovieItem({ movie }: ITrendingMovieItem) {
  return <div>{movie.title}</div>;
}
