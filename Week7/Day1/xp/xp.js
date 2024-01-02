// // Ex1
// const person = {
//   name: "John Doe",
//   age: 25,
//   location: {
//     country: "Canada",
//     city: "Vancouver",
//     coordinates: [49.2827, -123.1207],
//   },
// };

// const {
//   name,
//   location: {
//     country,
//     city,
//     coordinates: [lat, lng],
//   },
// } = person;

// console.log(
//   `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
// );
// //The output is - 'I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)' and it is this becuse the object person was destructured so that the key is now a variable that equals the value.

// //Ex 2
// // Destructure the parameter inside the function and return a string as the example seen below:
// // //output : 'Your full name is Elie Schoppik'

// function displayStudentInfo(objUser) {
//   const { first, last } = objUser;
//   return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({ first: "Elie", last: "Schoppik" }));

//EX 3
const users = { user1: 18273, user2: 92833, user3: 90315 };

const entries = Object.entries(users);
console.log(entries);

for (let [x, y] of Object.entries(users)) {
  console.log(`${x}: ${y * 2}`);
}

//ex4
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

//Its going to give object because a an instance of a class is a JavaScript object

//Ex 5
class Dog {
  constructor(name) {
    this.name = name;
  }
}

//   This one:

// 3
class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

const labdog = new Labrador("Jimmy", "LG");
console.log(labdog.name);
console.log(labdog.size);

//Ex6

// [2] === [2]
// {} === {}
// These are both false since they don't reference the exact same place in memory

//2.
// console.log(object2.number) --4
// console.log(object3.number) -- 4
// console.log(object4.number) --5

class Animal {
  constructor(aName, type, color) {
    this.aName = aName;
    this.type = type;
    this.color = color;
  }
}

class Mamal extends Animal {
  constructor(aName, type, color) {
    super(aName, type, color);
  }
  sound(sound) {
    return `${this.aName} is a ${this.color} ${this.type} and goes ${sound}. `;
  }
}

const dog = new Mamal("Max", "dog", "grey");
const dogsSound = dog.sound("roof");

console.log(dogsSound);

const farmerCow = new Mamal("Lily", "cow", "brown");
const cowSound = farmerCow.sound("mooooo");
console.log(cowSound);
