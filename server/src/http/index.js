const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();


const server = app => routers => class Server {
    constructor() {
        this.app = app;
        routers.map(router => {
            this.app.use(router.path, router.routes);
        });
    }
    init() {
        this.app.listen(5000, () => console.log("Listening on port 5000"));
    }
}


module.exports = server(app);