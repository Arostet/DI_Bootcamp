const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

const { router } = require("./routes/router.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3002, () => {
  console.log("Roger that, Jimmy. We're live on 3002");
});

app.use("/", router);
