const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const { hello, helloName } = require("../class/controllers/controller.js");

app.get("/hello", hello);
app.get("/hello/:name", helloName);

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on 3001, Henry");
});
