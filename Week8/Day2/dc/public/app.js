const getEmojis = async () => {
  const response = await fetch("http://localhost:3001/emojis");
  const data = await response.json();
  getWinner(data);
  threeOthers(data);
  const ul = document.querySelector("ul");
  randomizeAnswers(ul);
};
getEmojis();
const container = document.getElementById("emojiContainer");
const renderEmojis = (arr) => {
  arr.forEach((obj, index) => {
    const emojiElemenet = document.createElement("div");
    emojiElemenet.innerHTML = obj.emoji + "" + obj.name;
    emojiElemenet.id = `emoji-${index}`;
    emojiElemenet.className = "emojisAndName";
    container.appendChild(emojiElemenet);
  });
};

const getWinner = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  const winner = array[randomIndex];
  const emojiElement = document.createElement("div");
  emojiElement.innerHTML = `${winner.emoji}`;
  emojiElement.id = "winner";
  emojiElement.class = "winners";
  container.appendChild(emojiElement);
  const textWinner = document.createElement("li");
  textWinner.id = "textWinner";
  textWinner.class = "winners";
  textWinner.innerHTML = `${winner.name}`;
  const ul = document.querySelector("ul");
  ul.appendChild(textWinner);
};

const threeOthers = (array) => {
  const ul = document.querySelector("ul");
  const one = Math.floor(Math.random() * array.length);
  const loserOne = array[one];
  const two = Math.floor(Math.random() * array.length);
  const loserTwo = array[two];
  const three = Math.floor(Math.random() * array.length);
  const loserThree = array[three];
  const emojiElementOne = document.createElement("li");
  emojiElementOne.innerHTML = `${loserOne.name}`;
  emojiElementOne.id = "one";
  emojiElementOne.className = "losers";
  ul.appendChild(emojiElementOne);
  const emojiElementTwo = document.createElement("li");
  emojiElementTwo.innerHTML = `${loserTwo.name}`;
  emojiElementTwo.id = "two";
  emojiElementTwo.className = "losers";
  ul.appendChild(emojiElementTwo);
  const emojiElementThree = document.createElement("li");
  emojiElementThree.innerHTML = `${loserThree.name}`;
  emojiElementThree.id = "three";
  emojiElementThree.className = "losers";
  ul.appendChild(emojiElementThree);
};

const randomizeAnswers = (ul) => {
  const children = Array.from(ul.children);

  children.sort(() => 0.5 - Math.random());

  children.forEach((child) => {
    ul.appendChild(child);
  });
};
let counter = 0;
const form = document.forms[0];
console.log(form);

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const val = form[0].value;
//   console.log(val);
//   const winner = document.getElementById("textWinner");
//   const winningText = winner.textContent;
//   console.log(winningText);
//   if (winningText.toLowerCase() === val.toLowerCase()) {
//     const div = document.createElement("div");
//     div.textContent = "You Won!";
//     counter += 1;
//     console.log(counter);
//     const divBase = document.getElementById("winOrLose");
//     divBase.appendChild(div);
//   } else {
//     const div = document.createElement("div");
//     div.textContent = "You Lost!";
//     const divBase = document.getElementById("winOrLose");
//     divBase.appendChild(div);
//   }
// });

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const val = form[0].value;
  const winner = document.getElementById("textWinner");
  const winningText = winner.textContent;

  const sendInfo = async () => {
    const response = await fetch("http://localhost:3001/emojis", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ winningText, val }),
    });
    const data = await response.json();
    const div = document.createElement("div");
    div.textContent = data.message;
    const divBase = document.getElementById("winOrLose");
    divBase.appendChild(div);
  };
  sendInfo();
});
