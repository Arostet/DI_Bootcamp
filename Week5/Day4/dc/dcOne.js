let sentence = "The chulent I ate in Bnei Brak was not bad.";
wordNot = sentence.indexOf("not");
wordBad = sentence.indexOf("bad");
console.log(wordBad);
console.log(wordNot);
if (wordBad > wordNot) {
  sentence =
    sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3);
  console.log(sentence);
} else {
  console.log(sentence);
}
