import jwt from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";

import { prisma } from "../../../prisma/client";
import env from "../../../env";

interface TokenData {
    id: string
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) return res.status(400).json({ message: 'Unauthorized' })
    const token = authorization.split(' ')[1]

    if (!token) return res.status(400).json({ message: 'Unauthorized' })

    try {
        const decoded = jwt.verify(token, env.JWT_SECRET) as TokenData
        const existUser = await prisma.user.findFirst({
            where: {
                id: decoded.id
            }
        })

        if (!existUser) return res.status(400).json({ message: 'Unauthorized' })

        req.userId = decoded?.id
        next()
    } catch (error) {
        return res.status(400).json({ message: 'Unauthorized' })
    }
}