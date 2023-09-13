const getJWT = require("../Helper/GetJwtToken");

const cookiesToken = async (user, res) => {
  const token = getJWT(user.id);
  console.log(token);
  const options = {
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // this give to the user token that will not expire
    httpOnly: true, // the user can not get this is will appear to the server
  };
  // This for hash pass to front end dev

  user.HashedPassword = undefined;

  res.status(200).cookie("token", token, options).json({
    succes: true,
    token,
    user,
  });
  return;
};

module.exports = { cookiesToken };
