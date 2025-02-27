import axios from 'axios';
import { Navbar } from './components/Navbar/Navbar';
import { MoviesList } from './components/MoviesList/MoviesList';
import { POPULAR_MOVIES_URL } from './constants/api';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  const [favoriteMovies, setFavoriteMovies] = useState(() => {
    const savedFavoriteMovies = localStorage.getItem('favoriteMovies');
    if (savedFavoriteMovies) {
      // JSON.parse() - atgal pavercia JSON stringa i Javascript masyva/objekta
      return JSON.parse(savedFavoriteMovies);
    } else {
      return [];
    }
  });

  const fetchData = async () => {
    const response = await axios.get(POPULAR_MOVIES_URL);
    setMovies(response.data.results.slice(0, 10));
  };

  // paduodame (filma) kuri norime issaugoti:
  const handleFavoriteMovies = (movie) => {
    // spread operator - prideda nauja elementa i masyva, taciau islaiko senus viduje:
    // issaugok filma, bet ir nepamirsk kitu:
    setFavoriteMovies([movie, ...favoriteMovies]);
  };

  // useEffect veikia kai pirma karta yra uzkraunamas puslapis:
  // jei masyvas yra tuscias, jis suveiks tik viena karta, nes neturi jokiu priklausomybiu (todel masyvas yra tuscias):
  useEffect(() => {
    fetchData();
  }, []);

  // idek duomenis po siuo key favoriteMovies ir paversk juos i json formata:
  useEffect(() => {
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    // useEffect() paleis savyje esanti koda, kiekviena karta kada atsinaujins favoriteMovies masyvo informacija
  }, [favoriteMovies]);

  return (
    <div className="App">
      <Navbar favoriteMovies={favoriteMovies} />
      {/* galiausiai, cia aprasome ta pati callback is vaikinio komponento, tik jame iskvieciame funkcija: */}
      <MoviesList
        movies={movies}
        favoriteMovies={favoriteMovies}
        handleButtonClick={handleFavoriteMovies}
      />
    </div>
  );
}

export default App;
