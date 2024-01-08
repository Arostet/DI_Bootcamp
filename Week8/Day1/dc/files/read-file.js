import fs from "fs";

export const read = fs.readFile("file-data.txt", "utf-8", (error, info) => {
  if (error) return console.log(error);
  console.log(info);
});
