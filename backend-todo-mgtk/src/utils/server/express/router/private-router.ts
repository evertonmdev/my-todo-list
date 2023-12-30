import { Router } from "express";
import { authMiddleware } from "../middleware/authCheck";
import TasksController from "../controllers/TasksController";
import UsersController from "../controllers/UsersController";

const privateRouter = Router()
const tasksController = new TasksController()
const usersController = new UsersController()

privateRouter.use(authMiddleware)

privateRouter.post('/create-task', tasksController.createTask)
privateRouter.get('/user', usersController.getUser)
privateRouter.get('/tasks', tasksController.getTasks)
privateRouter.delete('/delete-task', tasksController.deleteTask)
privateRouter.put('/update-task', tasksController.updateTask)

export default privateRouter