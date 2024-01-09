const body = document.querySelector("body");
console.log(body);
const getPost = async () => {
  try {
    const response = await fetch("http://localhost:3002/posts/2");
    const data = await response.json();
    console.log(data);
    if (data.length > 1) {
      for (let i of data) {
        renderPost(i.title, i.content);
      }
    } else {
      renderPost(data.title, data.content);
    }
  } catch (e) {
    console.log(e);
  }
};
getPost();

const renderPost = (title, content) => {
  const div = document.createElement("div");
  div.className = "post";
  body.appendChild(div);
  const h1 = document.createElement("h1");
  h1.textContent = title;
  div.appendChild(h1);
  const p = document.createElement("p");
  p.textContent = content;
  div.appendChild(p);
};
