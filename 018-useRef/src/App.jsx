import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState();
  const [data, setData] = useState([]);
  const timerToCallAPI = useRef(null);

  const fetchAPI = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${inputText}`)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };

  useEffect(() => {
    if (inputText) {
      if (timerToCallAPI.current) clearInterval(timerToCallAPI.current);

      timerToCallAPI.current = setTimeout(fetchAPI, 1000);

      return () => clearInterval(timerToCallAPI.current);
    } else if (inputText === "") setData([]);
  }, [inputText]);

  return (
    <div className="App">
      <h1>Using useRef</h1>
      <div className="card">
        <input type="text" onChange={(e) => setInputText(e.target.value)} />
      </div>
      {data ? (
        <>
          {data.map((data) => (
            <div className={data.name} key={data.id}>
              <h2>{data.name}</h2>
              <img src={data.image} alt={`imagem de ${data.name}`} />
              <p>Gênero: {data.gender}</p>
              <p>Espécie: {data.species}</p>
              <p>Status: {data.status}</p>
              <p>Origem: {data.origin.name}</p>
            </div>
          ))}
        </>
      ) : null}
    </div>
  );
}

export default App;
