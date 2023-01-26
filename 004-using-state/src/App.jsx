import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("Write something below to rewrite me!");

  const handleTextChange = (e) => {
    e.target.value === ""
      ? setText("Write something below to rewrite me!")
      : setText(e.target.value);
  };

  return (
    <div className="App">
      <h1>Learning about useState</h1>
      <span>{text}</span>
      <hr />
      <div className="card">
        <input type="text" onChange={handleTextChange} />
      </div>
      <p>😊</p>
    </div>
  );
}

export default App;
