import { MovieCard } from '../MovieCard/MovieCard';
import './movies-list.css';

export const MoviesList = ({ movies, handleButtonClick, favoriteMovies }) => {
  return (
    <div className="movies-list">
      {/* // einame per kiekviena ir sukuriame kortele: */}
      {movies.map((movie, index) => {
        {/* cia aprasome ta pati callback is vaikinio komponento: */}
        return (
          <MovieCard
            key={index}
            movie={movie}
            // some() - veikia kaip ciklas; tikrina ar abiejuose masyvuose yra tas pat filmas (pagal id), jei taip tada tas filmas yra favorite:
            isFavorite={favoriteMovies.some(
              (favMovie) => favMovie.id === movie.id
            )}
            handleButtonClick={handleButtonClick}
          />
        );
      })}
    </div>
  );
};
