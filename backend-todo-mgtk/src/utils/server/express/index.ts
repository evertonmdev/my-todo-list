import express from 'express';
import cors from 'cors';
import publicRouter from './router/public-router';
import privateRouter from './router/private-router';

class ServerExpress {
    public app: express.Application

    constructor() {
        this.app = express()
        this.app.use(express.json())
        this.app.use(cors({
            origin: "*"
        }))

        this.app.use(publicRouter)
        this.app.use(privateRouter)

        console.log('Servidor Express Iniciado')
    }
}

export default ServerExpress