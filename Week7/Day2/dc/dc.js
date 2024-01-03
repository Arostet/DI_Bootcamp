const form = document.forms[0];
console.log(form[0]);
const section = document.getElementById("section");
console.log(section);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let fname = form[0].value;
  let lname = form[1].value;
  console.log(fname);
  console.log(lname);
  const div = document.createElement("div");
  div.textContent = `Your name is ${fname} ${lname}`;
  section.appendChild(div);
});
