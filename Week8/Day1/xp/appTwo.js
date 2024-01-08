const { readFile, writeFile } = require("./fileManager.js");

readFile("helloWorld.txt");

const content = "Writing to the file";

writeFile("byeWorld.txt", content);
