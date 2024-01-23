const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const { product_router } = require("./routes/p_route.js");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/products", product_router);

app.listen(process.env.PORT || 3001, () => {
  console.log("listening on 3001, Henry");
});
