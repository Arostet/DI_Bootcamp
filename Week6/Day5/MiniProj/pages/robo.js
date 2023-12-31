//ASSETS
const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

const section = document.querySelector("section");
console.log(section);

// robots.forEach((card) => {
//   //CREATE NECESSARY ELEMENTS
//   const div = document.createElement("div");
//   div.className = "card";
//   section.appendChild(div);
//   const img = document.createElement("img");
//   img.className = "pic";
//   div.appendChild(img);
//   const h4 = document.createElement("h4");
//   h4.className = "username";
//   div.appendChild(h4);
//   const h6 = document.createElement("h6");
//   h6.className = "email";
//   div.appendChild(h6);

//   //ADD VALUES FROM ROBOTS OBJECT
//   img.src = card.image;
//   h4.textContent = card.username;
//   h6.textContent = card.email;
// });

let form1 = document.getElementById("thisform");

form1.addEventListener("input", function (e) {
  e.preventDefault();
  const inputValue = document.getElementById("searchbox").value.toLowerCase();
  const filterArray = robots.filter(
    (card) =>
      card.username.toLowerCase() === inputValue ||
      card.email.toLowerCase() === inputValue ||
      card.name.toLowerCase() === inputValue
  );
  // if (filterArray.length === 0) {
  //   console.log("Sorry! That robot doesn't live here.");
  // }
  genRobots(filterArray);
});

///
genRobots(robots);

function genRobots(robotArray) {
  section.innerHTML = "";
  robotArray.forEach((card) => {
    const div = document.createElement("div");
    div.className = "card";
    section.appendChild(div);
    const img = document.createElement("img");
    img.className = "pic";
    div.appendChild(img);
    const h4 = document.createElement("h4");
    h4.className = "username";
    div.appendChild(h4);
    const h6 = document.createElement("h6");
    h6.className = "email";
    div.appendChild(h6);
    img.src = card.image;
    h4.textContent = card.username;
    h6.textContent = card.email;
  });
}
