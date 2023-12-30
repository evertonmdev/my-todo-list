import { Server, createServer } from "http";
import { Server as Io } from "socket.io";
import express from 'express';

import ServerExpress from "./express";

class MainServer extends ServerExpress {
    public server: Server
    private socketIo: Io

    constructor() {
        super()
        this.server = createServer(this.app)
        this.socketIo = new Io(this.server, {
            cors: {
                origin: "*"
            }
        })

        this.socketIo.on('connection', socket => {
            console.log('Conectou: ', socket.id)
            socket.on('disconnect', () => {
                console.log("Disconectou: ", socket.id)
            })
        })
    }
}


export default MainServer
