// Ex 1
// using the GET method and the action on the same HTML doc will have the info appear in the url itself

//Ex 2
//It will be hidden in the body for only me to see

//Ex 3
const marioGame = {
  detail: "An amazing game!",
  characters: {
    mario: {
      description: "Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser: {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach: {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    },
  },
};

let marioJson = JSON.stringify(marioGame);
console.log(marioJson);

const prettyPrint = JSON.stringify(marioGame, null, 2);
console.log(prettyPrint);
