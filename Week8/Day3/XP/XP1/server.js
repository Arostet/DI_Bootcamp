const express = require("express");
const { router } = require("./routes/index.js");
const app = express();
app.listen(3001, () => {
  console.log("listening on 3001");
});

app.use(router);
