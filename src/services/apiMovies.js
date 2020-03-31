import axios from 'axios';

const baseUrl = 'https://api.themoviedb.org/3/';
const apiKey = 'b633d756413361ebb99e0429df3527e6';


export const getTrendingFilm = () => {
    return axios.get(`${baseUrl}trending/movie/day?api_key=${apiKey}`).then(({ data }) => data.results)
}


export const getFilmWithId = (id) => {
    const newId = id.slice(1)
    return axios.get(`${baseUrl}movie/${newId}?api_key=${apiKey}&language=en-US`).then(({ data }) => data)
}

export const getCredits = (id) => {
    const newId = id.slice(1)
    return axios.get(`${baseUrl}movie/${newId}/credits?api_key=${apiKey}`).then(({ data }) => data)

}

export const getReviews = (id) => {
    const newId = id.slice(1)
    return axios.get(`${baseUrl}movie/${newId}/reviews?api_key=${apiKey}`).then(({ data }) => data.results)
}


export const fetchMovieByQuery = (query) => {
    return axios.get(`${baseUrl}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
        .then(({ data }) => data.results)
}