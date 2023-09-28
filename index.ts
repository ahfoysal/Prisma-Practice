import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const addUsers = await prisma.user.create({
    data: {
      email: "test1@prisma.client.com",
      name: "test1",
    },
  });
  const getAllUsers = await prisma.user.findMany();
  console.log(getAllUsers);
}
main();
