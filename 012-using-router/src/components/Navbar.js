import { Link } from "react-router-dom";
import * as Routers from "../constants/Routes";

import "../style/navBar.css";

export function NavBar() {
  return (
    <div className="navbar">
      <h1>
        <Link to={Routers.MOVIES}>Voltar</Link>
      </h1>
    </div>
  );
}
