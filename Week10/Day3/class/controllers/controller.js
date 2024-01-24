const hello = (req, res) => {
  res.json({ greeting: "Hello" });
};

const helloName = (req, res) => {
  const { name } = req.params;
  res.json({ greeting: `Hello ${name}` });
};

module.exports = {
  hello,
  helloName,
};
