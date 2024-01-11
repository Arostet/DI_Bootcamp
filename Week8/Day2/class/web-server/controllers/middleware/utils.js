const logger = (req, res, next) => {
  console.log("url=>", req.url);
  console.log("params=>", req.params);
  console.log("methods=>", req.method);
  next();
};

const auth = (req, res, next) => {
  const { admin } = req.query;
  if (admin === "john") {
    next();
  } else {
    res.send("not authorized");
  }
};

module.exports = {
  logger,
  auth,
};
