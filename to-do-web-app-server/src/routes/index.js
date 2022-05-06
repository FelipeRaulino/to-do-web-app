import express from "express";

import userRoutes from "./UsersRoutes.js";
import taskRoutes from "./TasksRoutes.js";

const Routes = express.Router();

Routes.use(taskRoutes);
Routes.use(userRoutes);

export default Routes;