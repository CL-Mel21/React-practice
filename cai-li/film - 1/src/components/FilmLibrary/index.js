import React, { useState } from "react";
import "./FilmLibrary.css";
import { TMDB } from "./TMDB";
import FilmDetail from "../FilmDetail";
import FilmRow from "../FilmRow";


const FilmLibrary = () => {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [faveFilms, setFaveFilms] = useState([]);
  const [listFilms, setListFilms] = useState(TMDB);
  const [listFilmsFlag, setListFilmsFlag] = useState(1);

  const handleSelectDetail = (film) => {
    setSelectedFilm(film);
  };

  const handleSelectFave = (film, isSelectFave, setIsSelectFave) => {
    
    if (isSelectFave === 'add_to_queue') {
      setFaveFilms([...faveFilms, film]);
      setIsSelectFave('remove_from_queue')
    } else if (isSelectFave === 'remove_from_queue') {
      setFaveFilms(faveFilms.filter(
        item => item.id !== film.id
      ));
      setIsSelectFave('add_to_queue')
      if (listFilmsFlag === 0) {
        setListFilms(faveFilms.filter(
          item => item.id !== film.id
        ))
      }

    }
  };

  const handleListFilms = (flag) => {
    if (flag === "all") {
      setListFilms(TMDB);
      setListFilmsFlag(1);
    } else if (flag === "faves") {
      setListFilms(faveFilms);
      setListFilmsFlag(0);
    }
  };

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div className="film-list-filters">
          <button
            className={
              listFilmsFlag === 1
                ? "film-list-filter is-active"
                : "film-list-filter"
            }
            onClick={() => handleListFilms("all")}
          >
            ALL
            <span className="section-count">{TMDB.length}</span>
          </button>
          <button
            className={
              listFilmsFlag === 0
                ? "film-list-filter is-active"
                : "film-list-filter"
            }
            onClick={() => handleListFilms("faves")}
          >
            FAVES
            <span className="section-count">{faveFilms.length}</span>
          </button>
        </div>
        {listFilms.map((film) => {
          return (
            <FilmRow
              key={film.id}
              film={film}
              handleSelectDetail={handleSelectDetail}
              handleSelectFave={handleSelectFave}
            />
          );
        })}
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <FilmDetail film={selectedFilm} />
      </div>
    </div>
  );
};

export default FilmLibrary;
