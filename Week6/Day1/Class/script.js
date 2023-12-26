// function familyAge(myAge) {
//   momAge = myAge * 2;
//   dadAge = momAge * 1.2;
//   console.log(`The Age of my mom is ${momAge} and my dad is ${dadAge}`);
// }

// familyAge(20);

const h1 = document.querySelector("h1");
console.log(h1);

const liTwo = document.querySelector("#listitemtwo");
console.log(liTwo);

const h2 = document.createElement("h2");
h2.innerText = "This is our first createElement";

const div = document.querySelector("#container");

div.append(h2);
