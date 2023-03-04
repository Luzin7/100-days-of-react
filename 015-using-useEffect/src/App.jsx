import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/Luzin7/repos")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <h1>My repo with useEffect!</h1>
      <img src={data[0].owner.avatar_url} alt="Imagem de perfil do usuário" />
      {data.map((repo) => (
        <h2 key={repo.full_name}>{repo.full_name}</h2>
      ))}
    </div>
  );
}

export default App;
