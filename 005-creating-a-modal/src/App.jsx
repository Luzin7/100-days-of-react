import { useState } from "react";
import Modal from "./components/modal";
import "./App.css";

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <div className="App">
      <h1>Creating a modal!</h1>
      <p>Click below to open the modal.</p>
      <button onClick={() => setToggleModal(true)}>Open Modal</button>
      <Modal isOpen={toggleModal}>
        <div className="modal__button">
          <button onClick={() => setToggleModal(false)}>X</button>
        </div>
        <h1>Here's the modal!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
          voluptates perspiciatis! Adipisci distinctio dolorum in impedit
          delectus nulla ipsum soluta fugiat, saepe deserunt sapiente
          praesentium perspiciatis explicabo perferendis porro totam?
        </p>
      </Modal>
    </div>
  );
}

export default App;
