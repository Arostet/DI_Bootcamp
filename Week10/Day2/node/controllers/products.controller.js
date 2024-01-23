const { __getAllProducts, __getProduct } = require("../models/model_p.js");

const getAllProducts = (req, res) => {
  __getAllProducts()
    .then((products) => {
      res.json(products);
    })
    .catch((err) => {
      console.log(err);
      res.status(404);
    });
};

const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await __getProduct(id);
    res.json(product);
  } catch (error) {
    (err) => {
      console.log(err);
      res.status(404);
    };
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
