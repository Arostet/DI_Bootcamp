const addToLocalStorage = (key, data) => {
  wondow.locaStorage.setItem(key, JSON.stringify(data));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

const userInfo = getFromLocalStorage("userinfo");

console.log(userInfo);

if (!userInfo) {
  window.location.href = "/localstorage/login.html";
}
