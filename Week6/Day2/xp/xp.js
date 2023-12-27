const h1 = document.querySelector("h1");
// console.log(h1);

const article = document.querySelector("article");
// console.log(article);

article.lastElementChild.remove();
// console.log(article);

const h2 = article.children[1];
// console.log(h2);
h2.addEventListener("click", toggleBackgroundRed);

function toggleBackgroundRed() {
  if (this.style.backgroundColor === "red") {
    this.style.backgroundColor = "";
  } else {
    this.style.backgroundColor = "red";
  }
}

const h3 = article.children[2];
// console.log(h3);

h3.addEventListener("click", displayNone);
function displayNone() {
  this.style.display = "none";
}

const boldbtn = document.getElementById("boldbtn");
// console.log(boldbtn);

boldbtn.addEventListener("click", makePBoldToggle);
function makePBoldToggle() {
  const allP = document.querySelectorAll("p");
  for (let p of allP) {
    if (p.style.fontWeight === "bold") {
      p.style.fontWeight = "normal";
      boldbtn.textContent = "MAKE IT BOLD";
    } else {
      p.style.fontWeight = "bold";
      boldbtn.textContent = "MAKE IT NORMAL";
    }
  }
}

//Exercise 2
const form = document.forms;
// console.log(form);
const fname = document.getElementById("fname");
// console.log(fname);
const lname = document.getElementById("lname");
// console.log(lname);
const submit = document.getElementById("submit");
// console.log(submit);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const ul = document.querySelector("ul");
  const fnameInput = document.getElementsByName("firstname")[0].value;
  const lnameInput = document.getElementsByName("lastname")[0].value;
  const li = document.createElement("li");
  li.textContent = fnameInput;
  ul.appendChild(li);
  const liL = document.createElement("li");
  liL.textContent = lnameInput;
  ul.appendChild(liL);
  //   console.log(`first name: ${fnameInput}`);
  //   console.log(`last name: ${lnameInput}`);
});

// 🌟 Exercise 3 : Transform The Sentence
let allBoldItems = [];
const p = document.getElementById("exThree");

function getBoldItems() {
  let bolde = p.querySelectorAll("strong");
  for (let word of bolde) {
    allBoldItems.push(word);
    word.style.color = "blue";

    word.addEventListener("click", function () {
      if (this.style.color === "blue") {
        this.style.color = "black";
      } else {
        this.style.color = "blue";
      }
    });
  }
  console.log(allBoldItems);
}

getBoldItems();

function checkBlue() {
  if (this.style.color === "blue") {
    this.style.color == "black";
  } else {
    this.style.color == "blue";
  }
}
