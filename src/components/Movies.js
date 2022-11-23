import Movie from "./Movie";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing found....</h4>
      )}
    </div>
  );
}
