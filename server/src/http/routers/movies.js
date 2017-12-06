const express = require('express');
const router = express.Router();

const Router = ({ MediaDB } )=> {
    router.get('/', async (req, res) => {
        res.json(await MediaDB.getTrending('movies'));
    });
    return router;
}

module.exports = { path: '/movies', router: Router };