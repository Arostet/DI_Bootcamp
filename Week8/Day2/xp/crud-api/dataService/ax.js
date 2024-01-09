const axios = require("axios");

const getPosts = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return response;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { getPosts };
