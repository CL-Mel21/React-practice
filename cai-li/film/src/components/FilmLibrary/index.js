import React, { useState, useEffect } from "react";
import "./FilmLibrary.css";
import { TMDB_API_KEY } from "./TMDB";
import FilmRow from "../FilmRow";
import { Outlet } from "react-router-dom";

const FilmLibrary = () => {
  const [faveFilms, setFaveFilms] = useState([]);
  const [listFilms, setListFilms] = useState([]);
  const [showList, setShowList] = useState([]);
  const [listFilmsFlag, setListFilmsFlag] = useState(1);
  const [loadPage, setLoadPage] = useState(1);
  const [selectYear, setSelectYear] = useState(2022);

  const handleSelectFave = (film, isSelectFave, setIsSelectFave) => {
    if (isSelectFave === "add_to_queue") {
      setFaveFilms([...faveFilms, film]);
      setIsSelectFave("remove_from_queue");
    } else if (isSelectFave === "remove_from_queue") {
      setFaveFilms(faveFilms.filter((item) => item.id !== film.id));
      setIsSelectFave("add_to_queue");
      if (listFilmsFlag === 0) {
        setShowList(faveFilms.filter((item) => item.id !== film.id));
      }
    }
  };

  const handleListFilms = (flag) => {
    if (flag === "all") {
      setShowList(listFilms);
      setListFilmsFlag(1);
    } else if (flag === "faves") {
      setShowList(faveFilms);
      setListFilmsFlag(0);
    }
  };

  const handleLoadMoreFilms = () => {
    setLoadPage(loadPage + 1);
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&primary_release_year=${selectYear}&sort_by=popularity.desc&page=${loadPage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setListFilms(listFilms.concat(jsonData.results));
        setShowList(listFilms.concat(jsonData.results));
      })
      .catch((error) => console.log(error.message));
  };

  const handleSelectYear = (e) => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&primary_release_year=${e.target.value}&sort_by=popularity.desc`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setListFilms(jsonData.results);
        if (listFilmsFlag === 1) {
          setShowList(jsonData.results);
        }
      })
      .catch((error) => console.log(error.message));
    setSelectYear(e.target.value);
    setLoadPage(2);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&primary_release_year=2022&sort_by=popularity.desc`
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        setListFilms(jsonData.results);
        setShowList(jsonData.results);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div className="FilmLibrary">
      <div className="film-list">
        <h1 className="section-title">
          FILMS
          <span>
            <input
              className="select-year"
              type="number"
              min="1950"
              max="2022"
              step="1"
              value={selectYear}
              onChange={handleSelectYear}
            />
          </span>
        </h1>
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
            <span className="section-count">{listFilms.length}</span>
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
        {showList.map((film) => {
          return (
            <FilmRow
              key={film.id}
              film={film}
              faveFilms={faveFilms}
              // handleSelectDetail={handleSelectDetail}
              handleSelectFave={handleSelectFave}
            />
          );
        })}
        {listFilmsFlag ? (
          <button className="load-more" onClick={handleLoadMoreFilms}>
            Load more
          </button>
        ) : null}
      </div>

      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default FilmLibrary;
