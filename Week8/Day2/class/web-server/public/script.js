const getData = async () => {
  try {
    const result = await fetch(`http://localhost:3001/users/`);
    const data = await result.json();
    render(data);
  } catch (e) {
    console.log(e);
  }
};

const render = (arr) => {
  const html = arr.map((item) => {
    return `<div>${item.name} ${item.email}</div>`;
  });
  document.getElementById("root").innerHTML = html.join("");
};
getData();
