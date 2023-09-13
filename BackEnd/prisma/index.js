const PrismaClient = require("@prisma/client");
const prisma = new PrismaClient.PrismaClient();

async function UserIsIn(name, email) {
  const user = await prisma.users.findFirst({
    where: { username: name, email: email },
  });
  return !user ? false : true;
}

module.exports = { prisma, UserIsIn };
