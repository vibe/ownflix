const express = require('express');
const router = express.Router();

const Router = ({ MediaDB } ) => {
    router.get('/:type', async (req, res) => {
        const mediaType = req.baseUrl.replace('/', '');
        const { type } = req.params;
        console.log(mediaType, type);
        const media = await MediaDB.get(mediaType, type);
        res.json(media);
    });
    return router;
}

module.exports = { path: /\/movies|\/shows/, router: Router };