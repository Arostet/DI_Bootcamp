// const divId = document.querySelector("#container");
// console.log(divId);

// const ulNodes = document.querySelectorAll(".list");

// console.log(ulNodes[0].children[1]);

// console.log(divId.hasAttribute("id"));

// console.log(divId.getAttribute("id"));

// divId.setAttribute("class", "monkey");

// const img = document.createElement("img");
// img.setAttribute("src", "sample.html");
// img.setAttribute("style", "width:100px");

// divId.append(img);

const a = document.querySelector("#dI");
console.log(a);

// const href = a.getAttribute("href");
// console.log(href);

// const hreflang = a.getAttribute("hreflang");
// console.log(hreflang);

// const rel = a.getAttribute("rel");
// console.log(rel);

// const target = a.getAttribute("target");
// console.log(target);

// const type = a.getAttribute("type");
// console.log(type);

// const typeCheck = a.type;
// console.log(typeCheck);
// // a.className = "overwrite";
// a.classList.add("bClass");
// a.classList.add("cClass");
// a.classList.remove("aClass");
// elem.classList.toggle(nameOfClass, true/false)	Toggles between adding and removing the class

// The first parameter removes the specified class from an element, and returns false. If the class does not exist, it is added to the element, and the return value is true.
// The optional second parameter is a Boolean value that forces the class to be added or removed, regardless of whether or not it already existed

const pNew = document.querySelector("#text");
console.log(pNew);
pNew.classList.add("pClass");
pNew.style.color = "red";
pNew.style.border = "solid 5px green";
