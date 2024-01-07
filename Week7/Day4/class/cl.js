async function asyncFunction() {
  return 1;
}

// an async function returns Promise
const arrowAsyncFunction = async () => {};

console.log(asyncFunction());

// asyncFunction()
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

async function getResult() {
  try {
    let res = await asyncFunction();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}
getResult();

const getX = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(5);
    }, 2000);
  });
};

const getY = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(6);
    }, 3000);
  });
};

const getXY = async () => {
  try {
    let x = await getX();
    let y = await getY();
    let xy = x + y;
    return xy;
  } catch (e) {
    console.log(e);
  }
};
console.log(getXY());

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolve Promise 1");
  }, 2 * 1000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    res("Resolve Promise 2");
  }, 5 * 1000);
});

const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Resolve Promise 3");
  }, 1 * 1000);
});

const data = async () => {
  try {
    result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
};
