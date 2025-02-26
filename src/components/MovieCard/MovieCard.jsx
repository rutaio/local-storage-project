import './movie-card.css';

export const MovieCard = ({ movie }) => {
  const imageURL = `https://image.tmdb.org/t/p/w200/${movie.poster_path}`;
  return (
    <div className="movie-card">
      <img src={imageURL}></img>
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      <button>Prideti prie megstamiausiu</button>
    </div>
  );
};
