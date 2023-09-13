// Bring prisma
const { prisma } = require("../prisma/index");
const { UserIsIn } = require("../prisma/index");
// Bring the cookies
const { cookiesToken } = require("../Utils/cookiesToken");

// Create a new user

exports.signup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new Error("Please provide the right data to sign IN");
    }

    const user = (await UserIsIn(name, email))
      ? undefined
      : await prisma.users.create({
          data: {
            username: name,
            email: email,
            HashedPassword: password,
          },
        });

    if (user === undefined) throw Error("User already in the data base");
    // Future to add cookies and expires date secure the
    // password using the cookiesToken
    // cookiesToken(user, res);

    await res.status(200).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
};
