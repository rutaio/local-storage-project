import axios from 'axios';
import { MoviesList } from './components/MoviesList/MoviesList';
import { Navbar } from './components/Navbar/Navbar';
import { POPULAR_MOVIES_URL } from './constants/api';
import { useEffect, useState } from 'react';

function App() {

  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(POPULAR_MOVIES_URL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <MoviesList movies={movies}/>
    </div>
  );
}

export default App;
