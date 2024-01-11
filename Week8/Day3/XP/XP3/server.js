const express = require("express");
const { router } = require("../XP3/routes/routes.js");
const app = express();
app.use(express.json());
app.listen(3001, () => {
  console.log("listening on 3001");
});

app.use(router);
