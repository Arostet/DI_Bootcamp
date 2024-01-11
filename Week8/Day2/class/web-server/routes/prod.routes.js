const express = require("express");
const { getAllProducts } = require("../controllers/products.controller.js");

const products_router = express.Router();

products_router.get("/", getAllProducts);

module.exports = {
  products_router,
};
