const objArr = [
  {
    name: "towel",
    price: 20,
    category: "home",
  },
  {
    name: "shirt",
    price: 30,
    category: "clothes",
  },
  {
    name: "saw",
    price: 20,
    category: "tools",
  },
  {
    name: "remote",
    price: 10,
    category: "electronics",
  },
  {
    name: "necklace",
    price: 20,
    category: "jewlery",
  },
];

const getProd = (name) => {
  const product = objArr.find((obj) => obj.name === name);
  if (product) {
    return `${product.name}, ${product.price}, ${product.category}`;
  } else {
    return `No product found with the name ${name}`;
  }
};
module.exports = { objArr, getProd };
