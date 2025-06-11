import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { searchMovies, getPopMovies } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setLoading(true);
    setErr(null);
    getPopMovies()
      .then(setMovies)
      .catch((e) => setErr("Failed to load movies."))
      .finally(() => setLoading(false));
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if(!searchQuery.trim()) return
    if(loading)return
    setLoading(true)
    try{
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setErr(null)

    }catch(err){
        console.log(err)
        setErr("Failed to search movies...")
    }finally{
        setLoading(false)
    }
    

  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="Submit-form">
          Search
        </button>
      </form>
      {err && <div className="error-messege">{err}</div>}

      {loading && <div className="loading">Loading...</div>}
      {err && <div className="error">{err}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {!loading &&
            !err &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      )}
    </div>
  );
}

export default Home;
