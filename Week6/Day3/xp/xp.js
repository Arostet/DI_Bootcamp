// 1.1: will display an alert with "inside the funcOne function 3".
// 1.2: If with const, error when trying to reassign a to 3---- const does not allow reassignment.
// 2.1: first display "inside the funcThree function 0", then "inside the funcThree function 5".
// 2.2: If a is declared with const, you cannot reassign it in funcTwo, and an error happens.
// 3.1: Running funcFour() and then funcFive() will display "inside the funcFive function hello".
// 4.1: "inside the funcSix function test".
// 4.2: if const instead of let, it will behave the same way
// 5.1: Running the code will display "in the if block 5" and then "outside of the if block 2".
// 5.2: same

// 🌟 Exercise 2 : Ternary Operator

function winBattle() {
  return true;
}

const winBattleT = () => true;

// console.log(winBattleT());

let experiencePoints;

winBattleT() ? (experiencePoints = 10) : (experiencePoints = 1);
// console.log(experiencePoints);

// 🌟 Exercise 3 : Is It A String ?

const isString = (input) => (typeof input === "string" ? true : false);
// console.log(isString("going"));
// console.log(isString(5));

// 🌟 Exercise 4 : Find The Sum
const sumOf = (x, y) => x + y;
// console.log(sumOf(3, 4));

// 🌟 Exercise 5 : Kg And Grams

// Function Declaration
function kilogramsToGrams(kg) {
  return kg * 1000;
}
console.log(kilogramsToGrams(2));
// Function Expression
const kilogramsToGramsE = function (kg) {
  return kg * 1000;
};
console.log(kilogramsToGramsE(2));
// Declarations are hoisted, so they can be invoked before they are defined in the code. Function expressions are not hoisted.

const kiloToGramsArrow = (kg) => kg * 1000;
console.log(kiloToGramsArrow(2));

//🌟 Exercise 6 : Fortune Teller

(function (nChildren, pName, loc, job) {
  console.log(
    `You will be a ${job} in ${loc}, and married to ${pName} with ${nChildren} kids.`
  );
})(5, "Jane", "Texas", "Data Scientist");

//🌟 Exercise 7 : Welcome
let nav = document.createElement("navbar");
nav.textContent = "test";
let body = document.querySelector("body");
body.appendChild(nav);
(function (name) {
  let div = document.createElement("div");
  div.textContent = `${name}`;
  nav.appendChild(div);
})("Yisroel");

// 🌟 Exercise 8 : Juice Bar
// Pt I
function makeJuice(size) {
  function inner(iO, iTw, iTh) {
    console.log(
      `The client wants a ${size} juice, containing ${iO}, ${iTw}, ${iTh}`
    );
  }
  inner("berries", "orange", "banana");
}
makeJuice("large");

// PtII
function makeJuice(size) {
  let ingredients = [];
  function inner(iO, iTw, iTh) {
    ingredients.push(iO, iTw, iTh);
    function displayJuice() {
      console.log(
        `The client wants a ${size} juice, containing ${iO}, ${iTw}, ${iTh}`
      );
    }
    displayJuice();
  }
  inner("berries", "orange", "banana");
  inner("goji", "nuts", "almond milk");
}
makeJuice("large");
