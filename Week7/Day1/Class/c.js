let obj = {
  name: "dan",
  age: 16,
  address: {
    city: "Tel Aviv",
  },
};

for (x in obj) {
  console.log(x, obj[x]);
}

let keys = Object.keys(obj);
let values = Object.values(obj);

values.forEach((val) => {
  console.log(val);
});

const entries = Object.entries(obj);

entries.forEach((x) => {
  console.log(`${x[0]}:${x[1]}`);
});

let obj1 = obj;

console.log(obj);
console.log(obj1);

obj1.age = 20;

console.log(obj);
console.log(obj1);
///they are the same bc they reference the same space in memory
// so make a clone
let obj2 = { ...obj };
obj2.name = "Sam";
obj2.age = 30;
obj2.address.city = "Delhi";
console.log(obj);
console.log(obj2);
///deep clone
let jObj = JSON.stringify(obj);
console.log(jObj);

let newObj = JSON.parse(jObj);
console.log(newObj.name);
////merging
let obj4 = {
  name: "Joe",
  age: 22,
};

let obj5 = {
  city: "Tel Aviv",
};
let obj6 = { ...obj4, ...obj5 };
console.log(obj6);

////destructuring
let obj7 = {
  fname: "Tom",
  age: 55,
};
///instead of:
// const name = obj7.name
// console.log(fname)

const { fname, age } = obj7;
console.log(fname);
