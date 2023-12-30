import { Router } from "express";
import UsersController from "../controllers/UsersController";

const publicRouter = Router();
const usersController = new UsersController()

publicRouter.post('/create', usersController.create)
publicRouter.post('/login', usersController.login)

export default publicRouter