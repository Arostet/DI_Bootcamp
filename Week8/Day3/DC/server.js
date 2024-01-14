const express = require("express");
const cors = require("cors");
const { trivia_router } = require("../DC/routes/trivia.router.js");
const app = express();
app.listen(3001, () => {
  console.log("Running on 3001, Chuck!");
});
app.use(express.json());
app.use(cors());
app.use("/trivia", trivia_router);
