import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { CategoryRoutes } from "../modules/category/category.route";
import { PostRoutes } from "../modules/post/post.route";

const router = express.Router();

const routes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/categories",
    route: CategoryRoutes,
  },
  {
    path: "/posts",
    route: PostRoutes,
  },
];

routes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
