import "./index.css";
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { TMDB_API_KEY } from "../FilmLibrary/TMDB";

function FilmDetail() {
  let params = useParams();
  const [film, setFilm] = useState();


useEffect(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${params.filmID}?api_key=${TMDB_API_KEY}&language=en-US`
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      setFilm({
        id: jsonData.id,
        title: jsonData.title,
        poster_path: jsonData.poster_path,
        backdrop_path: jsonData.backdrop_path,
        overview: jsonData.overview,
        release_date: jsonData.release_date,
        tagline: jsonData.tagline,
      });
    })
    .catch((error) => console.log(error.message));
}, [params]);

  if (!film) {
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
        <strong>{film.tagline}</strong>
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
