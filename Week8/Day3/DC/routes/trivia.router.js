const express = require("express");
const {
  showAll,
  showCurrentQuestion,
  getCorrect,
} = require("../controllers/trivia.controller.js");
const trivia_router = express.Router();

trivia_router.get("/", showAll);
trivia_router.get("/play", showCurrentQuestion);
trivia_router.post("/result", getCorrect);

module.exports = {
  trivia_router,
};
