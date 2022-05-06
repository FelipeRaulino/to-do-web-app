import Router from  "express";

import TasksController from '../controllers/TasksController.js';

import authCheck from "../middlewares/auth.js";

const taskRoutes = Router();

taskRoutes.get('/task/:userId', authCheck, TasksController.retrieveAllTasksUser);
taskRoutes.post('/task', authCheck, TasksController.createTask);
taskRoutes.put('/task/:userId/:taskId', authCheck, TasksController.updateTask);

export default taskRoutes;