// const makeAllCaps = (wordArray) => {
//   return new Promise((resolve, reject) => {
//     if (wordArray.every((word) => typeof word === "string")) {
//       resolve(wordArray.map((word) => word.toUpperCase()));
//     } else {
//       reject("Error: Not all items in this array are strings.");
//     }
//   });
// };

// const wordArray = ["dog", "mouse", "apple"];

// makeAllCaps(wordArray).then((result) => console.log(result));

// const sortWords = (uppercasedArray) => {
//   new Promise((resolve, reject) => {
//     if (uppercasedArray.length > 4) {
//       resolve(uppercasedArray.sort());
//     } else {
//       reject("4 or less. Sorry");
//     }
//   });
// };
// makeAllCaps([1, "pear", "banana"])
//   .then((result) => sortWords(result))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

const toJs = () => {
  return new Promise((resolve, reject) => {
    let objMorse = JSON.parse(morse);
    if (Object.keys(objMorse).length === 0) {
      reject("You don't know morse code, do you?");
    } else {
      resolve(objMorse);
    }
  });
};

toJs().then((response) => console.log(response));

const toMorse = (morseJs) => {
  return new Promise((resolve, reject) => {
    const userWord = prompt("Write a word:");
    const arrStr = userWord.toLowerCase().split("");
    const ReturnArr = arrStr.map((char) => {
      if (char in morseJs) {
        return morseJs[char];
      } else {
        reject("Character not valid");
      }
    });
    resolve(ReturnArr);
  });
};

const joinWords = (morseTranslation) => {
  return morseTranslation.map((element) => `<div>${element}</div>`);
};

toJs()
  .then((morseJs) => {
    return toMorse(morseJs);
  })
  .then((result) => {
    return result;
  })
  .then((morseTranslation) => {
    return joinWords(morseTranslation);
  })
  .then((final) => console.log(final))
  .catch((error) => {
    console.error(error);
  });
