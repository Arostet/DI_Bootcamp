const form1 = document.forms[0];
const input = form1[0];
console.log(input);
const div = document.querySelector("div");
console.log(div);

form1.addEventListener("submit", function (e) {
  e.preventDefault();
  const search = input.value;
  randomGif(search);
});

const randomGif = async (search) => {
  try {
    const randNum = randomNum(50);
    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`;
    response = await fetch(url);
    data = await response.json();
    const gifUrl = data.data[randNum].images.original.url;
    render(gifUrl);
  } catch (e) {
    console.log(e);
  }
};

const render = (gifUrl) => {
  const img = document.createElement("img");
  img.src = gifUrl;
  div.appendChild(img);
  const del = document.createElement("button");
  del.textContent = "DELETE";
  del.className = "delbu";
  div.appendChild(del);
  del.addEventListener("click", function (e) {
    e.preventDefault();
    img.remove();
    del.remove();
  });
};

const randomNum = (max) => {
  return Math.floor(Math.random() * max);
};

const delAll = document.getElementById("delAll");
delAll.addEventListener("click", function (e) {
  e.preventDefault();
  const allImg = document.querySelectorAll("img");
  allImg.forEach((img) => {
    img.remove();
  });
  const bu = document.querySelectorAll(".delbu");
  bu.forEach((bu) => {
    bu.remove();
  });
});
