const express = require("express");
const app = express();
app.listen(3001, () => {
  console.log("running on 3001");
});
app.use("/", express.static(__dirname + "/public"));

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
  { emoji: "🚀", name: "Rocket" },
  { emoji: "🌺", name: "Flower" },
  { emoji: "🍎", name: "Apple" },
  { emoji: "🍕", name: "Pizza" },
  { emoji: "🎉", name: "Party" },
  { emoji: "🌈", name: "Rainbow" },
  { emoji: "🚗", name: "Car" },
  { emoji: "🍔", name: "Hamburger" },
  { emoji: "🐱", name: "Cat" },
  { emoji: "🌟", name: "Star" },
  { emoji: "🍦", name: "Ice Cream" },
  { emoji: "🎈", name: "Balloon" },
  { emoji: "🌍", name: "Earth" },
  { emoji: "📚", name: "Book" },
  { emoji: "🌷", name: "Flower" },
  { emoji: "🎸", name: "Guitar" },
  { emoji: "🍁", name: "Maple Leaf" },
  { emoji: "🏆", name: "Trophy" },
  { emoji: "🌞", name: "Sun" },
  { emoji: "🌊", name: "Ocean" },
  { emoji: "🎃", name: "Jack-o-lantern" },
  { emoji: "🍪", name: "Cookie" },
  { emoji: "🏀", name: "Basketball" },
  { emoji: "🍓", name: "Strawberry" },
  { emoji: "📷", name: "Camera" },
  { emoji: "🎵", name: "Music" },
  { emoji: "🚲", name: "Bicycle" },
];

app.get("/emojis", (request, response) => {
  return response.json(emojis);
});

app.get("/game", (request, response) => {});
