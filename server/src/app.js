const MediaDB = require('./services/mediadb');

const TMBD = require('../mediaDB/providers/index').TMDB;
// const mediaDB = await new MediaDB({ providers, defaultProvider: 'TMDB' }).init();
const bootstrap = require('./bootstrap');
const routers = require("./http/routers");

const services = [
    { name: 'MediaDB', service: MediaDB }
];

const init = async bootstrap => {
    try {
        const app = await bootstrap({routers, services});
        app.start();
    } catch (error) {
        console.log("INIT: App failed to init: ", error);
    }
}

init(bootstrap);