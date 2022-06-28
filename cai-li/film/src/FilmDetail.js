import "./FilmDetail.css";

function FilmDetail({ film }) {
  console.log(film);
  if (film === null) {
    return FilmDetailEmpty();
  }

  return (
    <div className="FilmDetail is-hydrated">
      <figure className="film-backdrop">
        <img
          src={`https://image.tmdb.org/t/p/w1280${film.backdrop_path}`}
          alt={film.title}
        />
        <h1 className="film-title">{film.title}</h1>
      </figure>

      <div className="film-meta">
        <p className="film-detail-overview">
          <img
            src={`https://image.tmdb.org/t/p/w780${film.poster_path}`}
            className="film-detail-poster"
            alt={film.title}
          />
          {film.overview}
        </p>
      </div>
    </div>
  );
}

const FilmDetailEmpty = () => {
  return (
    <div className="FilmDetail">
      <p>
        <i className="material-icons">subscriptions</i>
        <span>No film selected</span>
      </p>
    </div>
  );
};

export default FilmDetail;
