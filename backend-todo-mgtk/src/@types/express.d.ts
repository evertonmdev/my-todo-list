import { Prisma } from "@prisma/client"

declare global {
    namespace Express {
        export interface Request {
            userId: string
        }
    }
}