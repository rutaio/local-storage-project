import { Zoom, toast } from 'react-toastify';
import './movie-card.css';

export const MovieCard = ({ movie, handleButtonClick, isFavorite }) => {
  // we find keys in documentation: https://developer.themoviedb.org/reference/intro/getting-started
  const imageURL = `https://image.tmdb.org/t/p/w200${movie.backdrop_path}`;

  const handleToggleFavorite = () => {
    if (isFavorite) {
      toast('Filmas pasalintas is megstamu saraso', { type: 'error' });
    } else {
      toast(`${movie.title} pridetas prie megstamu!`, {
        type: 'success',
        position: 'top-left',
        autoClose: 1000,
        transition: Zoom,
      });
    }
    handleButtonClick(movie);
  };

  return (
    <div className="movie-card">
      <img src={imageURL}></img>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <h5>Vote average: {movie.vote_average}</h5>
      {/* kadangi mes norime ne tik uzfiksuoti paspaudima bet ir konkretaus filmo paspaudimo, cia rasome arrow funkcija: */}
      <button onClick={() => handleToggleFavorite(movie)}>
        {isFavorite
          ? 'Pasalinti filma is megstamu saraso'
          : 'Prideti prie megstamiausiu'}
      </button>
    </div>
  );
};
