// 🌟 Exercise 1 : Find The Numbers Divisible By 23
// Instructions
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.
////////////////////
// let sumOfNum = 0;
// function displayNumbersDivisible() {
//   for (i = 0; i < 501; i++) {
//     if (i % 23 === 0) {
//       console.log(i);
//       sumOfNum += i;
//     }
//   }
// }
// displayNumbersDivisible();
// console.log(sumOfNum);

// Bonus: Add a parameter divisor to the function.

// let sumOfNum = 0;
// function displayNumbersDivisible(divisor) {
//   for (i = 0; i < 501; i++) {
//     if (i % divisor === 0) {
//       console.log(i);
//       sumOfNum += i;
//     }
//   }
// }
// displayNumbersDivisible(52);
// console.log(sumOfNum);

// 🌟 Exercise 2 : Shopping List
// Instructions
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

// Call the myBill() function.

// Bonus: If the item is in stock, decrease the item’s stock by 1
///////////////////////
// const stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// const prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// let shoppingList = ["banana", "orange", "apple"];
// let totalCost = 0;

// function myBill() {
//   for (let i of shoppingList) {
//     console.log(i);
//     if (i in stock && stock[i] > 0) {
//       console.log(i + " in stock");
//       totalCost += prices[i];
//       stock[i] -= 1;
//     } else {
//       continue;
//     }
//   }
// }
// myBill();
// console.log(totalCost);
// console.log(stock);
// /////////////////
// Exercise 3 : What’s In My Wallet ?
// Instructions
// Note: Read the illustration (point 4), while reading the instructions

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// 4. To illustrate:

// After you created the function, invoke it like this:

// changeEnough(4.25, [25, 20, 5, 0])
// The value 4.25 represents the item’s price
// The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)

// Examples

// changeEnough(14.11, [2,100,0,0]) => returns false
// changeEnough(0.75, [0,0,20,5]) => returns true

// function changeEnough(itemPrice, amountOfChange) {
//   posOne = Number(amountOfChange[0]) * 0.25;
//   posTwo = Number(amountOfChange[1]) * 0.1;
//   posThree = Number(amountOfChange[2]) * 0.05;
//   posFour = Number(amountOfChange[3]) * 0.01;
//   totalHave = posOne + posTwo + posThree + posFour;
//   if (totalHave > itemPrice) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

/////////////////////////////////
// 🌟 Exercise 4 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// function hotelCost() {
//   let userAnswer = prompt(
//     "How many nights would you like to stay in the hotel?"
//   );
//   nUserAnswer = Number(userAnswer);
//   while (isNaN(nUserAnswer) == true) {
//     hotelCost();
//   }
//   totalCost = nUserAnswer * 140;
//   return totalCost;
// }
// // console.log(hotelCost());

// // Define a function called planeRideCost().
// // It should ask the user for their destination.
// // If the user doesn’t answer or if the answer is not a string, ask again.
// // The function should return a different price depending on the location.

// planePrice = {
//   London: 183,
//   Paris: 220,
//   Other: 300,
// };

// function planeRideCost() {
//   planePrice = 0;
//   uA = prompt("What is your destination today?");
//   while (typeof uA != "string") {
//     planeRideCost();
//   }
//   if (uA.toLowerCase() == "london") {
//     planePrice += 183;
//   } else if (uA.toLowerCase() == "paris") {
//     planePrice += 220;
//   } else planePrice += 300;
//   return planePrice;
// }
// // console.log(planeRideCost());

// // Define a function called rentalCarCost().
// // It should ask the user for the number of days they would like to rent the car.
// // If the user doesn’t answer or if the answer is not a number, ask again.
// // Calculate the cost to rent the car. The car costs $40 everyday.
// // If the user rents a car for more than 10 days, they get a 5% discount.
// // The function should return the total price of the car rental.

// function rentalCarCost() {
//   let carCost;
//   while (true) {
//     let userCarAnswer = prompt(
//       "How many days would you like to rent the car for?"
//     );
//     let nUserCarAnswer = Number(userCarAnswer);
//     if (isNaN(nUserCarAnswer)) {
//       alert("Enter a valid number");
//     } else {
//       carCost = nUserCarAnswer * 40;
//       return carCost;
//     }
//   }
// }
// // console.log(rentalCarCost());

// // Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.

// // function totalVacationCost() {
// //   let hCost = hotelCost();
// //   let pRCost = planeRideCost();
// //   let rCCost = rentalCarCost();
// //   let tCost = hCost + pRCost + rCCost;
// //   return `Your total vacation cost is ${tCost} dollars. Enjoy!`;
// // }
// // // console.log(totalVacationCost());
// // 🌟 Exercise 5 : Users
// const div = document.querySelector("#container");
// console.log(div);
// const ul = document.querySelectorAll(".list");
// ul[0].children[1].textContent = "Richard";
// console.log(ul);

// // let secondUl = document.querySelectorAll(".list")[1];
// // console.log(secondUl);
// // let secondLi = secondUl.children[1];
// // console.log(secondLi);
// // secondLi.remove();
// for (i of ul) {
//   i.children[0].textContent = "Aron";
// }

// for (i of ul) {
//   i.classList.add("student_list");
// }
// const ulTest = document.querySelectorAll(".student_list");

// const firstUl = document.querySelector(".list");
// firstUl.classList.add("university", "attendance");
// console.log(firstUl.classList);

// div.style.backgroundColor = "lightblue";
// div.style.padding = "3px";

// for (let i of ul) {
//   for (let child of i.children) {
//     if (child.textContent === "Dan") {
//       child.style.display = "none";
//       break;
//     }
//   }
// }

// for (let i of ul) {
//   for (let child of i.children) {
//     if (child.textContent === "Richard") {
//       child.style.border = "solid 3px red";
//       break;
//     }
//   }
// }
// const body = document.querySelector("body");
// body.style.fontSize = "28px";

// // 🌟 Exercise 6 : Change The Navbar
// const div = document.querySelector("#navBar");
// console.log(div);
// div.setAttribute("id", "socialNetworkNavigation");
// console.log(div.id);

// const ul = document.querySelector("ul");
// console.log(ul);
// const newLi = document.createElement("li");
// newLi.innerText = "Logout";
// ul.appendChild(newLi);

// console.log(ul.firstElementChild.textContent);
// console.log(ul.lastElementChild.textContent);

// Exercise 7 : My Book List
const allBooks = [
  {
    title: "1984",
    author: "George Orwell",
    image: "1984.jpeg",
    alreadyRead: true,
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "tokillmo.jpeg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");
console.log(section);

for (let book of allBooks) {
  let newDiv = document.createElement("div");
  let bookText = document.createTextNode(`${book.title} by ${book.author}`);
  newDiv.appendChild(bookText);
  let bookImage = document.createElement("img");
  bookImage.src = book.image;
  bookImage.style.width = "100px";
  newDiv.appendChild(bookImage);
  if (book.alreadyRead == true) {
    newDiv.style.color = "red";
  }
  section.appendChild(newDiv);
}
