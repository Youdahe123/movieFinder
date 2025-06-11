import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
  const {isFav,removefromFav,addtoFavs} = useMovieContext();
  const favorite = isFav(movie.id)
  function onLike(e) {
    e.preventDefault()
    if(favorite) removefromFav(movie.id)
    else addtoFavs(movie)
    
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={movie.url || `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="movie-overlay">
          <button className={`favorite-btn ${favorite ? "active" : "" }`} onClick={onLike}>
            ♥︎
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.date || movie.release_date?.split('-')[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
