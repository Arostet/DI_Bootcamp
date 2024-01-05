const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    num <= 10 ? resolve(true) : reject(false);
  });
};

compareToTen(1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const exerciseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Great success strings await you.");
  }, 4000);
});

exerciseTwo
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.log(errorMessage);
  });

const promise = Promise.resolve(3);

promise.then((value) => {
  console.log(value);
});

const rejPromise = Promise.reject("Boo!");

rejPromise.then((val) => {
  console.log(val);
});
