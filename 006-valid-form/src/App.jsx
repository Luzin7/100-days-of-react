import React from "react";
import "./index.css";
import "./style/form.css";
import "./style/header.css";

export default function App() {
  return (
    <div className="app">
      <header>
        <div className="header__content">
          <h1>Realidade Virtual para Viagens - RVV</h1>
          <p>
            Planeje suas próximas viagens de maneira inovadora, utilizando
            tecnologia de realidade aumentada para visualizar destinos, hotéis,
            atrações, entre outros aspectos da viagem, antes mesmo de partir!
          </p>
        </div>
      </header>
      <main>
        <div className="form__card">
          <form className="form__content">
            <h2>Entre nessa viagem conosco!</h2>
            <div className="form__inputs">
            <div className="input name">
              <label>Seu nome completo</label>
              <input type="text" required/>
            </div>
            <div className="input email">
              <label>Seu melhor email</label>
              <input type="email" required/>
            </div>
            </div>
            <button className="btn">Quero entrar nessa viagem!</button>
          </form>
        </div>
      </main>
      <footer>
        <span>Luan Victor - 2023</span>
      </footer>
      {/* <div className="bg__img"></div> */}
    </div>
  );
}
