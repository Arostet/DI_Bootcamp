// 🌟 Exercise 1+2 : Giphy API

const fetchGif = async () => {
  try {
    const keyword = prompt("Enter Keyword");
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?q=${keyword}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const result = res.data;
        const desiredRes = result.slice(1, 11);
        console.log(desiredRes);
      });
  } catch (e) {
    console.log(e);
  }
};

console.log(fetchGif());

// EX 3
const starWars = async () => {
  try {
    const res = await fetch("https://www.swapi.tech/api/starships/9/", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data.result);
  } catch (e) {
    console.log(e);
  }
};

starWars();

//EX4
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  let result = await resolveAfter2Seconds();
  console.log(result);
}

asyncCall();
