const fs = require("fs");
const path = require("path");

// const directory = path.join(__dirname, "xp");

// fs.readdir(directory);
// files.forEach((file) => {
//   console.log(file);
// });
fs.readdir(".", (err, files) => {
  console.log(files);
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => {
      console.log(file);
    });
  }
});
