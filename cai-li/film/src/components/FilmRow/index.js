import React, { useState } from "react";
import "./index.css";

const FilmRow = ({ film, faveFilms, handleSelectDetail, handleSelectFave }) => {
  const isFave = faveFilms.filter((item) => {
    return item.id === film.id;
  });

  const [isSelectFave, setIsSelectFave] = useState(
    isFave.length === 1 ? "remove_from_queue" : "add_to_queue"
  );

  const releaseDate = new Date(film.release_date);
  return (
    <>
      <div className="FilmRow" onClick={() => handleSelectDetail(film)}>
        <img
          src={`https://image.tmdb.org/t/p/w780${film.poster_path}`}
          alt="{film.title} film poster"
        />
        <div className="film-summary">
          <h3>{film.title}</h3>
          <p>{releaseDate.getFullYear()}</p>
        </div>
        <button
          className="fave"
          onClick={() => handleSelectFave(film, isSelectFave, setIsSelectFave)}
        >
          <span className="material-icons">{isSelectFave}</span>
        </button>
      </div>
    </>
  );
};
export default FilmRow;
