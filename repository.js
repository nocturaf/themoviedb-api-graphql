const axios = require('axios');

const API_KEY = process.env.MOVIE_DB_API_KEY;

const getMovieList = axios.get(`https://api.themoviedb.org/3/list/1?api_key=${API_KEY}&language=en-US`)
    .then(res => res.data)
    .catch((error) => {
        console.error(error)
    });

module.exports = getMovieList;