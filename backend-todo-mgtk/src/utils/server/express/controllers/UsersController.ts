import { Prisma } from '@prisma/client'
import { Response, Request } from 'express'
import { prisma } from '../../../prisma/client'

import env from '../../../env';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

interface TokenData {
    id: string
}

class UsersController {
    async create(req: Request, res: Response) {
        const { email, nome, password }: Prisma.UserCreateInput = req.body

        if (email && nome && password) {
            const getUser = await prisma.user.findFirst({ where: { email } })

            if (getUser) return res.status(400).json({
                message: "Usuario já existe"
            })

            const passwordHashed = await bcrypt.hash(password, 10)

            const user = await prisma.user.create({
                data: {
                    email,
                    nome,
                    password: passwordHashed
                }
            })

            if (user) {
                const { password, ...CreateUser } = user
                return res.status(201).json({
                    user: CreateUser,
                    message: "Created Ok"
                })
            }
        }


        return res.status(400).json({
            message: "invalid request"
        })
    }

    async login(req: Request, res: Response) {
        const { email, password }: Prisma.UserCreateInput = req.body

        if (!email || !password) return res.status(400).json({
            message: "Email ou senha incorretos"
        })

        const user = await prisma.user.findFirst({ where: { email } })
        if (!user || !user.password) {
            return res.status(400).json({
                message: "Email ou senha incorretos"
            })
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if (checkPassword) {
            const { password, created_at, updated_at, ...CreateUser } = user

            const token = jwt.sign({
                id: CreateUser.id
            } as TokenData, env.JWT_SECRET, { expiresIn: "8h" })

            return res.json({
                user: CreateUser,
                token
            })
        }

        return res.status(400).json({
            message: "Email ou senha incorretos"
        })
    }

    async getUser(req: Request, res: Response) {
        const { userId } = req

        const user = await prisma.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                email: true,
                nome: true,
                Task: {
                    select: {
                        id: true,
                        title: true,
                        description: true,
                        status: true,
                        created_at: true,
                        updated_at: true
                    },
                    orderBy: {
                        created_at: "desc"
                    }
                },
                created_at: true,
                updated_at: true
            }
        })

        if (user) return res.json({
            user
        })

        return res.status(400).json({
            message: "User not found"
        })
    }
}

export default UsersController