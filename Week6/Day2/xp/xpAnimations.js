//Part 1 and 2
const myTimeout = setTimeout(helloWorldRevisited, 2000);
function helloWorld() {
  console.log("Hello World");
}
const div = document.querySelector("div");

function helloWorldRevisited() {
  const pHello = document.createElement("p");
  pHello.textContent = "Hello World";
  div.appendChild(pHello);
}

//Part 3

const myInterval = setInterval(helloWorldRevisited, 2000);
const button = document.getElementById("clear");
button.addEventListener("click", stopInt);
function stopInt() {
  clearInterval(myInterval);
  console.log("Stopped Int");
}

function enoughDivs() {
  let p = document.querySelectorAll("p");
  if (p.length >= 5) {
    stopInt();
  }
}

function checkInt() {
  let myInterval = setInterval(enoughDivs, 1000);
}
checkInt();

//EX 2 Animation
const animate = document.getElementById("animate");

let pos = 0;
let id = setInterval(function () {
  if (pos != 350) {
    pos++;
    animate.style.left = pos + "px";
    animate.style.top = pos + "px";
  } else {
    clearInterval(id);
  }
}, 10);
