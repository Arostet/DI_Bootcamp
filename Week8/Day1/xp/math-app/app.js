const { sumOf, multOf } = require("./math.js");
const l = require("lodash");

console.log(l.compact([0, 1, false, 2, "", 3]));

console.log(sumOf(4, 3));
console.log(multOf(2222, 2222));
