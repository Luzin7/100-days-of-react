import { Component } from "react";

import '../style/notFound.css'

export default class NotFound extends Component {
  render() {
    return (
      <div className="notFound">
        <div className="notFound__content">
          <h1>Não estou conseguindo achar essa página... 🤔</h1>
        </div>
      </div>
    );
  }
}
