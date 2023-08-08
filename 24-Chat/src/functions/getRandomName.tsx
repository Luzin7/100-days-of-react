const names = [
  "Alex",
  "Taylor",
  "Jordan",
  "Casey",
  "Avery",
  "Riley",
  "Jamie",
  "Dakota",
  "Drew",
  "Emerson",
  "Peyton",
  "Rowan",
  "Quinn",
  "Skyler",
  "Alexis",
  "Morgan",
  "Cameron",
  "Parker",
  "Reese",
  "Sawyer",
  "Kai",
  "Harley",
  "Phoenix",
  "Charlie",
];

export function getRandomName() {
  const randomName = Math.floor(Math.random() * names.length);
  return names[randomName];
}
