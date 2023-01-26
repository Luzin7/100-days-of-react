import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Luan Victor</h1>
      <button>Open Modal</button>
    </div>
  );
}

export default App;
