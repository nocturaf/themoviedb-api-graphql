const axios = require('axios');

const API_KEY = process.env.MOVIE_DB_API_KEY;

// Endpoint URL List
const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY_PARAM = `api_key=${API_KEY}`;
const LANGUAGE_PARAM = `&language=en-US`;
const MOVIE_LIST_URL = `/list/1?`;
const MOVIE_DETAIL_URL = `/movie/`;
const TRENDING_MOVIES_URL = `/trending/`;

function getHTTPClient(httpRequestMethod, url) {
    switch (httpRequestMethod) {
        case "GET":
            return axios.get(url);
        case "POST":
            return axios.post(url);
        default:
            return axios.get(url);
    }
}

function getAllMovies() {
    const targetURL = `${BASE_URL}${MOVIE_LIST_URL}${API_KEY_PARAM}${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function getMovie(movieId) {
    const targetURL = `${BASE_URL}${MOVIE_DETAIL_URL}${movieId}?${API_KEY_PARAM}${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

function getTrendingMovies(mediaType, timeWindow) {
    const targetURL = `${BASE_URL}${TRENDING_MOVIES_URL}${mediaType}/${timeWindow}?${API_KEY_PARAM}${LANGUAGE_PARAM}`;
    return getHTTPClient("GET", targetURL)
        .then(res => res.data)
        .catch((error) => {console.error(error.message)});
}

module.exports = {
    getAllMovies,
    getMovie,
    getTrendingMovies
};