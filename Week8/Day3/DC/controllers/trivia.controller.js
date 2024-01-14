const { triviaQuestions } = require("../config/db.js");
let currentIndex = 0;
let userRight = 0;

const showAll = (req, res) => {
  res.json(triviaQuestions);
};

const showCurrentQuestion = (req, res) => {
  const shuffleQuestions = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  const shuffledArray = shuffleQuestions(triviaQuestions);
  const currentQuestion = shuffledArray[currentIndex];
  res.json(currentQuestion);
};

const getCorrect = (req, res) => {
  const { correctAnswer, userAnswer, isCorrect } = req.body;
  console.log(correctAnswer, userAnswer, isCorrect);
  if (isCorrect) {
    currentIndex += 1;
    console.log(currentIndex);
    userRight += 1;
    console.log(userRight);
  } else {
    currentIndex += 1;
  }
};

module.exports = {
  showAll,
  showCurrentQuestion,
  getCorrect,
};
