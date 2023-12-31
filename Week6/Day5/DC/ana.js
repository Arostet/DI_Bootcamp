const form = document.getElementById("firstForm");
console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const firstWord = document.getElementById("wordOne").value.toLowerCase();
  const secondWord = document.getElementById("wordTwo").value.toLowerCase();
  tFirstWord = firstWord.replace(/\s+/g, "");
  tSecondWord = secondWord.replace(/\s+/g, "");
  anaFW = tFirstWord.split("").sort().join("");
  anaSW = tSecondWord.split("").sort().join("");
  console.log(anaSW);
  console.log(anaFW);
  if (anaFW === anaSW) {
    console.log(`${firstWord} is an anagram of ${secondWord}`);
  } else {
    console.log("No way Jose.");
  }
});
