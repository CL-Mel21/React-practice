import React, { useState } from "react";
import "./index.css";

const FilmRow = ({ film, handleSelectDetail, handleSelectFave }) => {
  const [isSelectFave, setIsSelectFave] = useState('add_to_queue');
  
  return (
    <>
      <button className="FilmRow" onClick={() => handleSelectDetail(film)}>
        <img
          src={`https://image.tmdb.org/t/p/w780${film.poster_path}`}
          alt="{film.title} film poster"
        />
        <div className="film-summary">
          <h3>{film.title}</h3>
          <p>{film.release_date}</p>
        </div>
        <button className="fave" onClick={() => handleSelectFave(film, isSelectFave, setIsSelectFave)}>
          <span className="material-icons">{isSelectFave}</span>
        </button>
      </button>
    </>
  );
};
export default FilmRow;
