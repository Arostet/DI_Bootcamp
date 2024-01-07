// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT

const form1 = document.forms[0];
console.log(form1);
const fAmt = form1[0];
const fFrom = form1[1];
const fTo = form1[2];

form1.addEventListener("submit", function (e) {
  e.preventDefault();

  const amt = fAmt.value;
  const from = fFrom.value;
  const to = fTo.value;
  curExchange(from, to, amt);
});

const curExchange = async (from, to, amt) => {
  try {
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/9c91b913ba769373baff0a24/pair/${from}/${to}/${amt}`
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
};

const get = async () => {
  const data = await fetch(
    "https://v6.exchangerate-api.com/v6/9c91b913ba769373baff0a24/pair/EUR/GBP/22"
  );
  const response = await data.json();
  console.log(response);
};
get();
