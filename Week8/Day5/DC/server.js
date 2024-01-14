const express = require("express");
const { users_router } = require("../miniProj/routes/route.js");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3002, () => {
  console.log("Roger that, Jimmy. We're live on 3002");
});

app.use("/users", router);
