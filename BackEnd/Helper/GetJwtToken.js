const jwt = require("jsonwebtoken");

const GetJwtToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRETS, {
    expiresIn: "1 day",
  });
};

module.exports = GetJwtToken;
