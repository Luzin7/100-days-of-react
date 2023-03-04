import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import * as Routers from "./constants/Routes";

import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";
import { MOVIES } from "./data/movies";
import { NavBar } from "./components/Navbar";
import { Loading } from "./components/Loading";
import fetchMovies from "./data/moviesAPI";
import NotFound from "./pages/NotFound";

const Movies = React.lazy(() => import("./pages/Movies"));

export default class App extends React.Component {
  fetchToData = async () => {
    const movieData = await fetchMovies();

    MOVIES.push(movieData);
  };

  componentDidMount() {
    Aos.init({ duration: 700 });
    this.fetchToData();
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route exact path={Routers.HOME} element={<Home />} />
          <Route
            path={Routers.MOVIES}
            element={
              <React.Suspense fallback={<Loading />}>
                <Movies />
              </React.Suspense>
            }
          />
          <Route
            path={Routers.MOVIE}
            element={
              <React.Suspense fallback={<Loading />}>
                <NavBar />
                <Movie />
              </React.Suspense>
            }
          />
          <Route path={Routers.NOTFOUND} element={<NotFound />} />
        </Routes>
      </Router>
    );
  }
}
