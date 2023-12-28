//Exercise 1
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((color, i) => {
  console.log(`#${i + 1} choice is ${color}`);
});
let checkViolet = colors.some((color) => {
  return color === "Violet";
});
console.log(checkViolet);
let checkTrue = checkViolet === true ? console.log("yes") : console.log("no");

//Exercise 2

const colors2 = [
  "Blue",
  "Green",
  "Red",
  "Orange",
  "Violet",
  "Indigo",
  "Yellow",
];
const ordinal = ["th", "st", "nd", "rd"];

colors2.forEach((color, i) => {
  i === 0
    ? console.log(`${i + 1}${ordinal[1]} choice is ${color}.`)
    : i === 1
    ? console.log(`${i + 1}${ordinal[2]} choice is ${color}.`)
    : i === 2
    ? console.log(`${i + 1}${ordinal[3]} choice is ${color}.`)
    : console.log(`${i + 1}${ordinal[0]} choice is ${color}.`);
});

//Ex 3
const fruits = ["apple", "orange"];
const vegetables = ["carrot", "potato"];

const result = ["bread", ...vegetables, "chicken", ...fruits];
console.log(result);
//Merges arrays with spread operator, results in combined item list.

const country = "USA";
console.log([...country]);
//Splits string into array of characters.

let newArray = [...[, ,]];
console.log(newArray);
//empty

//Ex4
const users = [
  { firstName: "Bradley", lastName: "Bouley", role: "Full Stack Resident" },
  { firstName: "Chloe", lastName: "Alnaji", role: "Full Stack Resident" },
  { firstName: "Jonathan", lastName: "Baughn", role: "Enterprise Instructor" },
  { firstName: "Michael", lastName: "Herman", role: "Lead Instructor" },
  { firstName: "Robert", lastName: "Hajek", role: "Full Stack Resident" },
  { firstName: "Wes", lastName: "Reid", role: "Instructor" },
  { firstName: "Zach", lastName: "Klabunde", role: "Instructor" },
];

const welcomeStudents = users.map((student) => {
  return `Hello ${student.firstName}`;
});
console.log(welcomeStudents);

const onlyFS = users.filter((student) => {
  return student.role === "Full Stack Resident";
});
console.log(onlyFS);

//EX5
const epic = ["a", "long", "time", "ago", "in a", "galaxy", "far far", "away"];

const oneString = epic.reduce((acc, val) => {
  return acc + " " + val;
});
console.log(oneString);

//ex6

const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];

const passedStudents = students.filter((student) => {
  return student.isPassed === true;
});
console.log(passedStudents);
passedStudents.forEach((student) => {
  console.log(`Congrats, ${student.name}! You passed ${student.course}.`);
});
