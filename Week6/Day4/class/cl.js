const orArray = [1, 4, 9, 16];
const nArray = orArray.map((element) => {
  if (element > 4) {
    return element * 2;
  } else {
    return element;
  }
});
console.log(nArray);

let obAr = orArray.map((element, i) => {
  return {
    value: element,
    index: i,
  };
});

console.log(obAr);
