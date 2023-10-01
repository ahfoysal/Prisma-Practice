import { Category } from "@prisma/client";
import prisma from "../..";

const addCategory = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({ data });
  return result;
};
// const addOrUpdateCategory = async (data: Profile): Promise<Profile> => {
//   const isExist = await prisma.profile.findUnique({
//     where: {
//       CategoryId: data.CategoryId,
//     },
//   });
//   if (isExist) {
//     const result = await prisma.profile.update({
//       where: {
//         CategoryId: data.CategoryId,
//       },
//       data: {
//         bio: data.bio,
//       },
//     });
//     return result;
//   }
//   const result = await prisma.profile.create({ data });
//   return result;
// };

// const getCategorys = async (): Promise<Partial<Category>[]> => {
//   const result = await prisma.Category.findMany({
//     // select: {
//     //   email: true,
//     //   id: true,

//     // },
//     include: {
//       profile: true,
//     },
//   });
//   return result;
// };

// const getSingleCategory = async (id: number) => {
//   const result = await prisma.Category.findUnique({
//     where: {
//       id: id,
//     },
//     include: {
//       profile: true,
//     },
//   });
//   return result;
// };
export const CategoryService = {
  // getCategorys,
  addCategory,
  // addOrUpdateCategory,
  // getSingleCategory,
};
