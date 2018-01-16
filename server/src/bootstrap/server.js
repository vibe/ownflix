const express = require('express');
const cors = require('cors');


class Server {
    constructor({ routers = [], services }) {
        this.server = express();
        this.server.use(cors());
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