const fs = require("fs").promises;
const path = require("path");

// try {
//   const data = fs.readFileSync("info.txt", "utf-8");
//   console.log(data);
// } catch (e) {
//   console.log("e=>", e);
// }

// const info = fs.readFile("info.txt", "utf-8", (err, info) => {
//   if (err) return console.log(err.message);
//   console.log(info);
// });

// let data = "sfjkjksfkjsfjf";
// fs.writeFile("newfile", data, "utf-8", (err) => {
//   if (err) return "err=>", err;
//   console.log("file created");
// });

// fs.appendFile("newfile", data, "utf-8", (err) => {
//   if (err) return "err=>", err;
//   console.log("file created");
// });

// fs.copyFile("info.txt", "info", (err) => {
//   if (err) return console.log(err);
// });

// fs.mkdir("utils", (err) => {});

const read = async () => {
  const data = await fs.readFile("info.txt", "utf-8");
  console.log(data);
};
read();
