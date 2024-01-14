const getGame = async () => {
  const response = await fetch("http://localhost:3001/trivia/play");
  const data = await response.json();
  render(data);
};
getGame();

const render = (data) => {
  const container = document.getElementById("container");
  const questionDiv = document.createElement("div");
  questionDiv.textContent = data.question;
  container.appendChild(questionDiv);
  const answer = document.createElement("div");
  answer.textContent = data.answer;
  answer.id = "theAnswer";
  answer.style = "display: none";
  container.appendChild(answer);
};

const form = document.forms[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const checkInput = async () => {
    const correctAnswer = document.getElementById("theAnswer").textContent;
    console.log(correctAnswer);

    await fetch("http://localhost:3001/trivia/result", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // correctAnswer,
        // userAnswer,
        // isCorrect,
      }),
    });
  };
  checkInput();
});
