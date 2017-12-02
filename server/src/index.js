const express = require('express');
const cors = require('cors');
const app = express();

const MediaDB = require('../mediaDB');

app.use(cors());
app.get('/', (req, res) => {
    return res.send('Hello World');
})

app.get('/movies', async (req, res) => {
    const movies = await MediaDB.getPopularMovies();

    console.log(movies);
    return res.send(movies.get());
})
app.listen(5000, () => console.log("Listening on port 5000"))