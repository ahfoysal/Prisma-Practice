import { Request, Response } from "express";
import { RequestHandler } from "express-serve-static-core";
import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync";
import sendResponse from "../../shared/sendResponse";
import { UserService } from "./user.service";
import { User } from "@prisma/client";

const addUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.addUser(req.body);

    sendResponse<User>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User added  successfully!",
      data: result,
    });
  }
);
const addOrUpdateUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.addOrUpdateUser(req.body);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Profile updated/created successfully!",
      data: result,
    });
  }
);
const getUsers: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.getUsers();

    sendResponse<Partial<User>[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Users fetched successfully!",
      data: result,
    });
  }
);
const getSingleUser: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await UserService.getSingleUser(Number(req.params.id));

    sendResponse<User>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "User fetched successfully!",
      data: result,
    });
  }
);
export const UserController = {
  getUsers,
  addUser,
  addOrUpdateUser,
  getSingleUser,
};
