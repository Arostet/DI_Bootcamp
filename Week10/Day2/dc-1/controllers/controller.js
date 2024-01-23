const helloExpress = (req, res) => {
  res.send("Hello Express App");
};

const getPost = (req, res) => {
  const { input } = req.body;
  res.send(`I recieved your post, here's what you sent: ${input}`);
};

module.exports = {
  helloExpress,
  getPost,
};
