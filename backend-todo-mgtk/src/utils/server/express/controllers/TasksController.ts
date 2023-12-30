import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { prisma } from "../../../prisma/client";

class TasksController {
    async createTask(req: Request, res: Response) {
        const { userId } = req
        const { title, description, status }: Prisma.TaskCreateInput = req.body

        if (title && description && status) {
            const taskCreated = await prisma.task.create({
                data: {
                    user_id: userId,
                    description,
                    status,
                    title
                }
            })

            const { created_at, updated_at, user_id, ...Task } = taskCreated

            if (taskCreated) return res.status(201).json({
                task: Task,
                message: "Created OK"
            })

            return res.status(500).json({
                message: "Internal Server Error"
            })
        }


        return res.status(400).json({
            message: "Invalid Request"
        })
    }

    async deleteTask(req: Request, res: Response) {
        const { userId } = req
        const { id }: Prisma.TaskUpdateInput = req.body

        if (id) {
            const task = await prisma.task.findUnique({
                where: {
                    id: id as string
                }
            })

            if (task && task.user_id == userId) {
                const deleteOK = await prisma.task.delete({
                    where: {
                        id: id as string
                    }
                })

                if (deleteOK) return res.status(202).json({
                    message: "Deleted OK"
                })
            }

            return res.status(400).json({
                message: "Bad Request"
            })
        }

        return res.status(400).json({
            message: "Bad Request"
        })
    }

    async updateTask(req: Request, res: Response) {
        const { userId } = req
        const { title, description, status, id }: Prisma.TaskUpdateInput = req.body

        if ((title || description || status) && id) {
            const task = await prisma.task.findUnique({ where: { id: id as string } })
            if (!task || task.user_id !== userId) return res.status(400).json({
                message: "Task not found"
            })

            const dataToUpdate = {
                ...(title && { title }),
                ...(description && { description }),
                ...(status && { status })
            }

            const taskUpdated = await prisma.task.update({
                where: {
                    id: id as string
                },
                data: dataToUpdate
            })

            if (taskUpdated) {
                return res.status(202).json({
                    message: "Update Ok"
                })
            }
        }

        return res.status(400).json({
            message: "Bad Request"
        })
    }


    async getTasks(req: Request, res: Response) {
        const { userId } = req

        const tasks = await prisma.task.findMany({
            where: {
                user_id: userId
            },
            orderBy: {
                updated_at: "desc"
            }
        })

        if (tasks) return res.json(tasks)

        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}


export default TasksController