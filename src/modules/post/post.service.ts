import { Post } from "@prisma/client";
import prisma from "../..";

const addPost = async (data: Post): Promise<Post> => {
  const result = await prisma.post.create({ data });
  return result;
};
const updatePost = async (data: Partial<Post>): Promise<Post> => {
  console.log(data);
  const result = await prisma.post.update({
    where: {
      id: data.id,
    },
    data,
  });
  return result;
};

const getPosts = async (options: any) => {
  const { sortBy, sortOrder, searchTerm, page, limit } = options;
  console.log(options);
  const skip = parseInt(limit) * page - parseInt(limit) || 0;
  const take = parseInt(limit) || 10;
  return await prisma.$transaction(async (tx) => {
    const result = await tx.post.findMany({
      skip,
      take,
      include: {
        author: true,
        category: true,
      },
      orderBy:
        sortBy && sortOrder
          ? {
              [sortBy]: sortOrder,
            }
          : {
              createdAt: "desc",
            },
      where: {
        OR: [
          {
            title: {
              contains: searchTerm,
              mode: "insensitive",
            },
          },
          {
            author: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
          {
            category: {
              name: {
                contains: searchTerm,
                mode: "insensitive",
              },
            },
          },
        ],
      },
    });
    const total = await tx.post.count();
    return { result, total, page: page || 1, limit: limit || 10 };
  });
};

const getSinglePost = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id: id,
    },
    include: {
      category: true,
      author: true,
    },
  });
  return result;
};
const deletePost = async (id: number) => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
  return result;
};
export const PostService = {
  getPosts,
  addPost,
  updatePost,
  getSinglePost,
  deletePost,
};
