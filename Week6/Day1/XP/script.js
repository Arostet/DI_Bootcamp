let people = ["Greg", "Mary", "Devon", "James"];

people.splice(0, 1);
console.log(people);

people.splice(2, 1, "Jason");
console.log(people);

people.push("Aron");
console.log(people);

maryIndex = people.indexOf("Mary");
console.log(maryIndex);

console.log(people.slice(1, 3));

console.log(people.indexOf("Foo"));

let lastPlace = people.length - 1;
let getLastPlace = people[lastPlace];
console.log(getLastPlace);

console.log(people);

for (let i of people) {
  console.log(i);
}

for (let person of people) {
  if (person == "Devon") {
    break;
  }
  console.log(person);
}
//Exercise 2
let colors = ["red", "green", "yellow", "purple", "aqua"];

for (let color of colors) {
  console.log(`My #${colors.indexOf(color) + 1} choice is ${color}`);
}

// // Exercise 3 : Repeat The Question
// let userNumber = prompt("Enter a number: ")

// while (userNumber < 10) {
//     userNumber = prompt("Enter a number: ")
// }

// Exercise 4
let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building["numberOfFloors"]);
console.log(building["numberOfAptByFloor"]["firstFloor"]);
console.log(building["numberOfAptByFloor"]["thirdFloor"]);
let targetTenant = building["nameOfTenants"][1];
console.log(targetTenant);
console.log(building["numberOfRoomsAndRent"][targetTenant.toLowerCase()][0]);

let sarahsRent = building.numberOfRoomsAndRent.sarah[1];
let davidsRent = building.numberOfRoomsAndRent.david[1];
dansRent = building.numberOfRoomsAndRent.dan[1];

saDaRent = sarahsRent + davidsRent;

console.log(sarahsRent);
console.log(davidsRent);
console.log(dansRent);
console.log(saDaRent);

if (saDaRent > dansRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log(building.numberOfRoomsAndRent.dan[1]);
}

// Exercise 5
let family = {
  numberOfMembers: 5,
  lastName: "Jonason",
  members: {
    father: "Jimmy",
    mother: "Sally",
    daughter: "Rachel",
    son: "David",
  },
  pet: "Ricky the Dog",
};

for (key in family) {
  console.log(key);
  console.log(family[key]);
}

// Exercise 6
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

for (i in details) {
  console.log(i);
  console.log(details[i]);
}

// Ex 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secretName = [];

for (i of names) {
  secretName.push(i[0]);
}
secretName.sort();
secretNameString = secretName.join("");
console.log(secretNameString);
