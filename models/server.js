const express = require('express');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        // Middlewares
        this.middlewares();

        // Rutas
        this.routes();
    }

    middlewares() {
        // Directorio publico
        this.app.use( express.static('public'));
    }

    routes() {
        this.app.get('/', (req, res) => {
            res.json({
                msg: 'get del API'
            });
        })

        this.app.put('/', (req, res) => {
            res.json({
                msg: 'put del API'
            });
        })

        this.app.post('/', (req, res) => {
            res.json({
                msg: 'post del API'
            });
        })

        this.app.delete('/', (req, res) => {
            res.json({
                msg: 'delete del API'
            });
        })
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('listening on port ' + this.port);
        });
    } 

}

module.exports = Server;