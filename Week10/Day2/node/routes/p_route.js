const express = require("express");
const {
  getAllProducts,
  getProduct,
} = require("../controllers/products.controller.js");
const product_router = express.Router();

product_router.get("/", getAllProducts);
product_router.get("/:id", getProduct);

module.exports = { product_router };
