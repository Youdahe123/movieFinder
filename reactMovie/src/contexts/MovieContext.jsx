import { createContext, useState, useContext, useEffect } from "react";
const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorite, setFavorties] = useState([]);
  useEffect(() => {
    const storedFavs = localStorage.getItem('FavMovies');
    if (storedFavs) setFavorties(JSON.parse(storedFavs));
  }, []);

  useEffect(() => {
    localStorage.setItem('FavMovies', JSON.stringify(favorite));
  }, [favorite]);

  const addtoFavs = (movie) => {
    setFavorties(prev => [...prev, movie]);
  };

  const removefromFav = (movieID) => {
    setFavorties(prev => prev.filter(movie => movie.id !== movieID));
  };
  const isFav = (movieID) => {
    return favorite.some(movie => movie.id === movieID);
  };
  const value = {
    favorite,
    addtoFavs,
    removefromFav,
    isFav,
  };
  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>;
};