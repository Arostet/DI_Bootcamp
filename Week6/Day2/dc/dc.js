const form1 = document.forms;
console.log(form1);

const noun = form1[0][0];
const adj = form1[0][1];
const sName = form1[0][2];
const verb = form1[0][3];
const place = form1[0][4];
console.log(noun);
console.log(adj);
console.log(sName);
console.log(verb);
console.log(place);

form1[0].addEventListener("submit", function (e) {
  e.preventDefault();
  const vNoun = noun.value;
  const vAdj = adj.value;
  const vSName = sName.value;
  const vVerb = verb.value;
  const vPlace = place.value;
  console.log(`The ${vAdj} ${vNoun} named ${vSName} ${vVerb} ${vPlace}`);
});
