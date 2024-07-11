import { PrismaClient } from ".prisma/client";

const db = new PrismaClient();

// async function test() {
//   const user = await db.user.create({
//     data: {
//       username: "admin2",
//       phone: "12313123123",
//     },
//   });
//   const users = await db.user.findMany({
//     where: {
//       username: {
//         contains: "admin",
//       },
//     },
//   });
//   console.log(users);
// }

// async function test() {
//   //   const token = await db.sMSToken.create({
//   //     data: {
//   //       token: "12312132",
//   //       user: {
//   //         connect: {
//   //           id: 1,
//   //         },
//   //       },
//   //     },
//   //   });
//   const token = await db.sMSToken.findUnique({
//     where: {
//       id: 1,
//     },
//     include: {
//       user: true,
//     },
//   });
// }
// test();

export default db;
