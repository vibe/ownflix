const express = require('express');

class Server {
    constructor({ routers = [], services }) {
        this.server = express();
        routers.map(({ path, router }) => { 
            this.server.use(path, router(services))
        });
    }
    start() {
        this.server.listen(5000, () => console.log('server started'));
        return this;
    }
    init() {
        return this;
    }
}

module.exports = Server;