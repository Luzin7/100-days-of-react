const items = [
  {
    id: 1,
    nome: "Carro",
    categoria: "Automóvel",
    subcategoria: "Carro",
    marca: "Volkswagen",
    raça: null,
  },
  {
    id: 2,
    nome: "Iate",
    categoria: "Automóvel",
    subcategoria: "Aquático",
    marca: "Mercedes-benz",
    raça: null,
  },
  {
    id: 3,
    nome: "Cachorro",
    categoria: "Animal",
    subcategoria: "Cão",
    marca: null,
    raça: "SRD",
  },
  {
    id: 4,
    nome: "Bolo",
    categoria: "Comida",
    subcategoria: "Confeitaria",
    marca: null,
    raça: null,
  },
];

const input = document.querySelector("input");

input.addEventListener("input", () => {
  const filtro = items.filter((items) =>
    items.nome.toLowerCase().includes(input.value.toLowerCase())
  );
  console.log(filtro);
});
