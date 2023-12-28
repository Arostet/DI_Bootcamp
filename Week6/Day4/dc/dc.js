const gameInfo = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

const excUser = gameInfo.forEach((user) => {
  console.log(user.username + "!");
});

const winners = gameInfo
  .filter((user) => user.score > 5)
  .map((user) => user.username);

console.log(winners);

const infoReduced = gameInfo.reduce((acc, val) => acc + val.score, 0);
console.log(infoReduced);
