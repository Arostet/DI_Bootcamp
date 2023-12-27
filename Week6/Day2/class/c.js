//Two methods to add text to an element when creating it

// let div = document.createElement("div");
// console.log(div);
// div.appendChild(document.createTextNode("Test"));
// let body = document.querySelector("body");
// body.appendChild(div);

// let section = document.createElement("section");
// section.textContent = "Test Again";
// div.appendChild(section);

// let button = document.createElement("button");
// button.textContent = "The Click is Real";
// div.appendChild(button);
// button.classList.add("btn");
// console.log(button.classList);

// //EVENTS
// button.addEventListener("click", function () {
//   console.log("#CLICKISREAL");
// });
// onclick="inform()"
// function inform() {
//   console.log("Clicked");
// }

// const button = document.getElementById("enter");

// // button.onclick = inform;
// const table = document.getElementById("sampleTable");

// function insertRow() {
//   let tr = document.createElement("tr");
//   table.appendChild(tr);
//   let td = document.createElement("td");
//   td.textContent = "Yep";
//   tr.appendChild(td);
//   tr.appendChild(td);
// }

// let btn = document.getElementById("btn");
// btn.addEventListener("click", respondClick);
// btn.addEventListener("click", respondClickTwo);

// //
// function respondClick() {
//   btn.style.color = "blue";
// }
// function respondClickTwo(e) {
//   e.target.textContent = "Clicked!";
// }

// btn.addEventListener("mouseover", respondMouseOver);
// btn.addEventListener("mouseout", respondMouseOut);

// //e is the event object
// function respondMouseOver(e) {
//   console.log(e);
//   alert("My mouse is over the btn");
// }

// function respondMouseOut() {
//   alert("My mouse is out of the btn");
// }

// const form = document.getElementsByTagName("form")[0];
// const email = document.getElementById("mail");
// const name = document.getElementById("name");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// form.addEventListener("submit", function (event) {
//   if (!email.validity.valid) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

//
// function sayHi() {
//   alert("Hello");
// }
// let id = setTimeout(sayHi, 5000);

// const button = document.querySelector("#btnstop");
// button.addEventListener("click", function () {
//   clearTimeout(id);
// });

// const div = document.getElementById("banner");

// setTimeout(function () {
//   div.style.display = "block";
// }, 3000);
const child = document.getElementById("child");

let pos = 0;
let id = setInterval(function () {
  if (pos != 400) {
    pos++;
    child.style.left = pos + "px";
    child.style.top = pos + "px";
  } else {
    clearInterval(id);
  }
}, 10);
