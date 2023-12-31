import { Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { Post } from "@prisma/client";
import { PostService } from "./post.service";

const addPost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.addPost(req.body);

    sendResponse<Post>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post created  successfully!",
      data: result,
    });
  }
);
const updatePost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.updatePost(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post updated successfully!",
      data: result,
    });
  }
);
const getPosts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // console.log(req.query);
    const { result, total, page, limit } = await PostService.getPosts(
      req.query
    );

    sendResponse<Partial<Post>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Posts fetched successfully!",
      data: result,
      meta: {
        total,
        page,
        limit,
      },
    });
  }
);
const getSinglePost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.getSinglePost(Number(req.params.id));

    sendResponse<Post>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post fetched successfully!",
      data: result,
    });
  }
);
const deletePost: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await PostService.deletePost(Number(req.params.id));

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Post Deleted successfully!",
      data: result,
    });
  }
);
export const PostController = {
  getPosts,
  addPost,
  updatePost,
  getSinglePost,
  deletePost,
};
