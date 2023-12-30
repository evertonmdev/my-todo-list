import { config } from "dotenv";
config()


interface EnvVariables {
    JWT_SECRET: string
}

export default {
    JWT_SECRET: process.env.JWT_SECRET
} as EnvVariables