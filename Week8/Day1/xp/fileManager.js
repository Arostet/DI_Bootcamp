const fs = require("fs").promises;

const readFile = async (file) => {
  try {
    const response = await fs.readFile(file, "utf-8");
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};

const writeFile = (file, data) => {
  const response = fs.writeFile(file, data, "utf-8", (err) => {
    console.log(err);
  });
};

module.exports = { readFile, writeFile };
