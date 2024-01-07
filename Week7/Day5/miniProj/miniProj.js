const div = document.getElementById("mainDiv");
const form1 = document.forms[0];
const plus = document.getElementById("loadingIcon");

const loader = () => {
  const icon = document.createElement("i");
  icon.className = "fa-solid fa-circle-plus fa-beat";
  icon.id = "loadingIcon";
  icon.style = "color: white";
  div.appendChild(icon);
};
const cancelLoader = () => {
  const icon = document.getElementById("loadingIcon");
  icon.style = "display: none";
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const starWars = async () => {
  try {
    loader();
    const rNum = getRandomInt(83);
    const result = await fetch(`https://www.swapi.tech/api/people/${rNum}`, {
      method: "GET",
    });
    const data = await result.json();
    console.log(data.result.properties);
    const name = data.result.properties.name;
    const height = data.result.properties.height;
    const gender = data.result.properties.gender;
    const birthYear = data.result.properties.birth_year;
    render(name, height, gender, birthYear);
    homeWorld(rNum);
  } catch (e) {
    console.log("e=>", e);
  } finally {
    cancelLoader();
  }
};
const homeWorld = async (rNum) => {
  const result = await fetch(`https://www.swapi.tech/api/planets/${rNum}`, {
    method: "GET",
  });
  const data = await result.json();
  renderHome(data.result.properties.name);
};

const renderHome = (home) => {
  const divA = document.createElement("div");
  divA.textContent = home;
  divA.className = "divContent";
  div.appendChild(divA);
};

const render = (name, height, gender, birthYear) => {
  const divA = document.createElement("div");
  divA.textContent = name;
  divA.className = "divContent";
  div.appendChild(divA);
  const divB = document.createElement("div");
  divB.textContent = height;
  divB.className = "divContent";
  div.appendChild(divB);
  const divC = document.createElement("div");
  divC.textContent = gender;
  divC.className = "divContent";
  div.appendChild(divC);
  const divD = document.createElement("div");
  divD.textContent = birthYear;
  divD.className = "divContent";
  div.appendChild(divD);
};

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  div.innerHTML = "";
  starWars();
});
