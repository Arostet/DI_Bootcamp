const { db } = require("../config/db.js");

const __getAllProducts = () => {
  return db("products")
    .select("product_id", "product_name", "price")
    .orderBy("product_name");
};

const __getProduct = (id) => {
  return db("products")
    .select("product_id", "product_name", "price", "description")
    .orderBy("product_name")
    .where({ product_id: id });
};

module.exports = { __getAllProducts, __getProduct };
