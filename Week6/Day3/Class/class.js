// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

// function checkYear() {
//   const uPrompt = prompt("Enter a year:");
//   return uPrompt >= 2000
//     ? console.log("You are in the 21st century")
//     : console.log("You live in the Middle Ages");
// }
// // checkYear();

// function myFunc(x, y) {
//   return x + y;
// }

// myFunc(2, 9);

// const myFunc1 = (x, y) => {
//   return x + y;
// };

// // console.log(myFunc1(6, 7));
// const myFunc2 = (x, y) => x + y;
// console.log(myFunc2(2, 4));

// Using arrow function and ternary operator create a calculator that returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

// const calculator = (x, y, operator) => {
//   return operator === "+"
//     ? x + y
//     : operator === "-"
//     ? x - y
//     : operator === "*"
//     ? x * y
//     : operator === "/"
//     ? x / y
//     : "Invalid operator";
// };

// console.log(calculator(3, 4, "+"));
// console.log(calculator(3, 4, "-"));
// console.log(calculator(3, 4, "*"));
// console.log(calculator(3, 4, "/"));
// console.log(calculator(3, 4, "("));

function createLikeCounter() {
  let count = 0;
  return function () {
    count += 1; // Increment the count
    return count; // Return the updated count
  };
}

// Create a counter for each photo
let photo1Likes = createLikeCounter();
let photo2Likes = createLikeCounter();

// Simulate liking each photo
console.log("Photo 1 likes:", photo1Likes()); // Photo 1 likes: 1
console.log("Photo 1 likes:", photo1Likes()); // Photo 1 likes: 2
console.log("Photo 2 likes:", photo2Likes()); // Photo 2 likes: 1
