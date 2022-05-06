import express from "express";

import UsersController from "../controllers/UsersController.js";
import SessionController from "../controllers/SessionController.js";

import authCheck from "../middlewares/auth.js";

const userRoutes = express.Router();

userRoutes.get('/users', authCheck, UsersController.retrieveAllUsers);
userRoutes.post('/user', UsersController.createUser);
userRoutes.post('/createSession', SessionController.createSession);

export default userRoutes;