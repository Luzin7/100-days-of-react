import { Component } from "react";
import { Link } from "react-router-dom";

import { MOVIES } from "../data/movies";

import "../style/movies.css";

export default class Movies extends Component {
  render() {
    return (
      <div className="movies">
        {MOVIES[0].map((movie) => (
          <div key={movie.id} className="movie" data-aos="fade-down">
            <Link to={`/movies/${movie.id}`}>
              <h1>{movie.title}</h1>
              <img
                src={`https://image.tmdb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={`capa do filme ${movie.title}`}
              />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
