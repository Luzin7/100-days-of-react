import { useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementAndShowText":
      return { count: state.count + 1, showText: !state.showText };
    default:
      return "This action doesn't exist";
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  });

  const handleClick = () => {
    dispatch({ type: "incrementAndShowText" });
  };

  const { count, showText } = state;
  return (
    <div className="App">
      <h1>Odd or Even?</h1>
      <h2>Click below and discover it!</h2>
      <div className="card">
        <button onClick={handleClick}>{count}</button>
        {showText ? <p>This number is Even!</p> : <p>This number is Odd!</p>}
      </div>
      <p className="read-the-docs">Projeto de estudo. Luan Victor - 2023</p>
    </div>
  );
}

export default App;
