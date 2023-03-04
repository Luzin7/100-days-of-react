import { Link } from "react-router-dom";
import * as Routers from "../constants/Routes";

export function Home() {
  return (
    <div className="Home">
      <h1>
        Tenha acesso aos filmes
        <Link to={Routers.MOVIES}> aqui</Link>
      </h1>
    </div>
  );
}
