import MainServer from "./src/utils/server";

const port = process.env.PORT || 3002
const mainServer = new MainServer()


mainServer.server.listen({
    host: "0.0.0.0",
    port: port
}, () => {
    console.log('Servidor escutando na porta', port)
})