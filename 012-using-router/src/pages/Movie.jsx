import React from "react";
import { useParams } from "react-router-dom";
import { MOVIES } from "../data/movies";

import "../style/movie.css";

export function Movie() {
  const { id } = useParams();

  const movie = MOVIES[0].find((movie) => movie.id === parseInt(id));

  return (
    <div className="movie">
      <p className="moreAbout">Aqui estão algumas informações sobre o filme {movie.title}</p>
      <div className="movie__info">
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
          alt={`capa do filme ${movie.title}`}
        />
        <div className="movie__title">
          <h1>{movie.title}</h1>
          <span>{movie.release_date}</span>
        </div>
        <div className="movie__overview">
          <p>{movie.overview}</p>
        </div>
      </div>
      <div className="bg"></div>
    </div>
  );
}
