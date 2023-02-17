import React from "react";
import "./index.css";
import "./style/form.css";
import "./style/header.css";
import "./style/footer.css";

export default function App() {
  const validateNameInput = () => {
    let validateUserName =
      /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ 0-9_-]{4,16}$/;
    const inputName = document.querySelector('input[name="name"]');
    const inputEmail = document.querySelector('input[name="email"]');

    inputName.classList.remove("error__input");
    inputName.nextElementSibling.classList.add("hidden");

    if (!validateUserName.test(inputName.value)) {
      inputName.classList.add("error__input");
      inputName.nextElementSibling.classList.remove("hidden");
    }

    if (!inputEmail.value) {
      inputEmail.classList.add("error__input");
      inputEmail.nextElementSibling.classList.remove("hidden");
    }
  };
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
                <input
                  type="text"
                  name="name"
                  required
                  onChange={() => validateNameInput()}
                />
                <span className="error__text hidden">
                  Nome inválido! <br></br>É necessário pelo menos 4 dígitos e no
                  máximo 16.
                </span>
              </div>
              <div className="input email">
                <label>Seu melhor email</label>
                <input type="email" name="email" required />
                <span className="error__text hidden">Email Inválido!</span>
              </div>
            </div>
            <button className="btn" onClick={() => validateNameInput()}>
              Quero entrar nessa viagem!
            </button>
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
