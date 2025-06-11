import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
function Favorites() {
  const { favorite } = useMovieContext();

  if (favorite) {
    return (
      <div className="movies-grid">
        {
      favorite.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h1 className="favorites-title">Favorites</h1>
      {/* Your favorites content */}
    </div>
  );
}

export default Favorites;
