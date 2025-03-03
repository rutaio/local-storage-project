import { MovieCard } from '../MovieCard/MovieCard';
import './fav-movies-list.css';

export const FavoriteMoviesList = ({ handleButtonClick, favoriteMovies }) => {
  return (
    <>
      <h2>Favorite Movies</h2>
      <div className="fav-movies-list">
        {favoriteMovies.length > 0 &&
          favoriteMovies.map((movie, index) => {
            return (
              <MovieCard
                key={index}
                movie={movie}
                isFavorite={favoriteMovies.some(
                  (favMovie) => favMovie.id === movie.id
                )}
                handleButtonClick={handleButtonClick}
              />
            );
          })}
        {favoriteMovies.length === 0 && <p>No movies found. Add a movie to this list.</p>}
      </div>
    </>
  );
};
