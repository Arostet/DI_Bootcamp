let arr = [
  { id: 1, name: "aaa", username: "aaa111" },
  { id: 2, name: "bbb", username: "bbb211" },
  { id: 3, name: "ccc", username: "ccc311" },
];
console.log(arr);
const arrjson = JSON.stringify(arr);
console.log(arrjson);

let arrFromJson = JSON.parse(arrjson);
console.log(arrFromJson);
