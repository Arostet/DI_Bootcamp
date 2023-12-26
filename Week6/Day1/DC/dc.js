//creating array of planets in the solar system
const planets = [
  "Earth",
  "Mercury",
  "Venus",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

function createPlanets() {
  const section = document.querySelector("section");
  for (let planet of planets) {
    const planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.classList.add(planet.toLowerCase());
    planetDiv.textContent = planet;
    section.appendChild(planetDiv);
  }
}
createPlanets();
