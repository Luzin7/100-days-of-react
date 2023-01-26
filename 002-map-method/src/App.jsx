function App() {
  const STYLE = {
    textAlign: "center",
  };

  const PERSON_DATA = [
    {
      name: "Jorge",
      age: "32",
      country: "Brasil",
    },
    {
      name: "Albert",
      age: "144",
      country: "Deutschland",
    },
    {
      name: "Hawking",
      age: "81",
      country: "United Kingdom",
    },
    {
      name: "Cortella",
      age: "69",
      country: "Brasil",
    },
    {
      name: "Clóvis",
      age: "57",
      country: "Brasil",
    },
  ];
  return (
    <div style={STYLE} className="App">
      {PERSON_DATA.map((person) => (
        <p>
          {person.name}, {person.age} - {person.country}
        </p>
      ))}
    </div>
  );
}
export default App;
