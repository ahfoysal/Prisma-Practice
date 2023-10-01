import { Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { Category } from "@prisma/client";
import { CategoryService } from "./category.service";

const addCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.addCategory(req.body);

    sendResponse<Category>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Category created  successfully!",
      data: result,
    });
  }
);
// const addOrUpdateUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const result = await UserService.addOrUpdateUser(req.body);

//     sendResponse(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Profile updated/created successfully!",
//       data: result,
//     });
//   }
// );
// const getUsers: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const result = await UserService.getUsers();

//     sendResponse<Partial<User>[]>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "Users fetched successfully!",
//       data: result,
//     });
//   }
// );
// const getSingleUser: RequestHandler = catchAsync(
//   async (req: Request, res: Response) => {
//     const result = await UserService.getSingleUser(Number(req.params.id));

//     sendResponse<User>(res, {
//       statusCode: httpStatus.OK,
//       success: true,
//       message: "User fetched successfully!",
//       data: result,
//     });
//   }
// );
export const CategoryController = {
  // getUsers,
  addCategory,
  // addOrUpdateUser,
  // getSingleUser,
};
