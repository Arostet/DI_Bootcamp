const express = require("express");
const { users_router } = require("./routes/users.routes.js");
const { products_router } = require("./routes/prod.routes.js");
const { logger } = require("./controllers/middleware/utils.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3001, () => {
  console.log("run on port 3001");
});

app.use(logger);
app.use("/", express.static(__dirname + "/public"));

app.use(users_router);
app.use("/products", products_router);
