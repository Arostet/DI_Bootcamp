let formvalues = {};

function handleInput(e) {
  formvalues[e.target.name] = e.target.value;
  console.log(formvalues);
}

// filter for all users older than 30
// and store their data in an array
// use Array.filter Array.map Object.keys

// [
//     {id:'user1',age:44, name: 'picard'},
//     {id:'user3',age:109, name: 'janeway'}
//   ]

const users = {
  user1: { age: 44, name: "picard" },
  user2: { age: 12, name: "sisko" },
  user3: { age: 109, name: "janeway" },
};

let userKeys = Object.keys(users);
console.log(userKeys);

const adult = Object.keys(users)
  .filter((key) => users[key].age > 30)
  .map((id) => ({ id: id, ...users[id] }));
console.log(adult);

// class
class Animal {
  constructor(animalname) {
    this.name = animalname;
  }
  makeSound() {
    return `${this.name} makes a sound`;
  }
}

const animalA = new Animal("Dog");
const animalB = new Animal("Lion");
console.log(animalA.makeSound());
console.log(animalB.makeSound());

class Dog extends Animal {
  constructor(dogname) {
    super("Dog");
    this.mydogname = dogname;
  }
  bark() {
    return `My ${this.name}, ${this.mydogname}, barks`;
  }
}
const dog = new Dog("Tommy");
let barks = dog.bark();
console.log(barks);
let sounds = dog.makeSound();
