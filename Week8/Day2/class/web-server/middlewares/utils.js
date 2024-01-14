const logger = (req, res, next) => {
  console.log("urls=>", req.url);
  console.log("parambody=>", req.body);
  console.log("method=>", req.method);
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
