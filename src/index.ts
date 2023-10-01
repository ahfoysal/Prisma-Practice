import { PrismaClient } from "@prisma/client";
import app from "./app";

const prisma = new PrismaClient();
const port = 5001;

async function main() {
  app.listen(port, () => {
    console.log("sever listening on port" + port);
  });
}

main();

export default prisma;
