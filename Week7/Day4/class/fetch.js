// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     render(data);
//   });

// const render = (arr) => {
//   const html = arr.map((item) => {
//     return `<div>
//     <img src="https://robohash.org/${item.id}?size=150x150" >
//         <h2>${item.name}<h2/>
//         <h2>${item.username}<h2/>
//         <h2>${item.email}<h2/>
//         </div>`;
//   });
//   document.querySelector("body").innerHTML = html.join("");
// };

// const getData = async () => {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     render(data);
//   } catch (e) {
//     console.log(e);
//   }
// };
// getData();

const post = {
  title: "Bla",
  body: "djjad",
  userId: 4,
};
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(post),
})
  .then((res) => res.json())
  .then((newpost) => console.log(newpost));

const form = document.forms[0];
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  postAUser(name, username, email);
});

const postAUser = async (name, username, email) => {
  try {
    const res = await fetch("https://users-18kl.onrender.com/userjson", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, username, email }),
    })
      .then((res) => res.json())
      .then((newpost) => console.log(newpost));
  } catch (e) {
    console.log(e);
  }
};
