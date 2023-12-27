let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

//1
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => console.log(fruit));
};
displayGroceries();

//2
const cloneGroceries = () => {
  const user = client;
  client = "Betty";
  console.log(user);
  const shopping = groceries;
  groceries.totalPrice = "35$";
  console.log(shopping.totalPrice);
};
cloneGroceries();
//User stays John and does not become Betty because declaring a variable makes the variable the actual value, not a reference, as opposed to an array or object which would be a reference. That is why shopping changes with groceries, because it is a reference to the memory location that is identical to groceries, and so when we change groceries we also change shopping.
