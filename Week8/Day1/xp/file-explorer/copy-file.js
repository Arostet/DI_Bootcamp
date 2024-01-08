const fs = require("fs");

fs.copyFile("source.txt", "destination.txt", (err) => {
  if (err) {
    console.log("err", err);
  } else {
    console.log("great success");
  }
});
