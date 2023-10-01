import { Post } from "@prisma/client";
import prisma from "../..";

const addPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};
// const addOrUpdatePost = async (data: Profile): Promise<Profile> => {
//   const isExist = await prisma.profile.findUnique({
//     where: {
//       PostId: data.PostId,
//     },
//   });
//   if (isExist) {
//     const result = await prisma.profile.update({
//       where: {
//         PostId: data.PostId,
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

const getPosts = async (): Promise<Partial<Post>[]> => {
  const result = await prisma.post.findMany({
    // select: {
    //   email: true,
    //   id: true,

    // },
    include: {
      author: true,
      category: true,
    },
  });
  return result;
};

// const getSinglePost = async (id: number) => {
//   const result = await prisma.post.findUnique({
//     where: {
//       id: id,
//     },
//   });
//   return result;
// };
export const PostService = {
  getPosts,
  addPost,
  // addOrUpdatePost,
  // getSinglePost,
};
