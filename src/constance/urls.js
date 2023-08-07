const baseUrl = 'https://api.themoviedb.org/3';

const moviesList = '/discover/movie';
const moviesGenre = '/genre/movie/list';
const moviesPoster='https://image.tmdb.org/t/p/w500'

const urls = {
    moviesList:{
        base:moviesList,
        byId:(id)=>`${moviesList}?page=${id}`
    },
    moviesGenre:{
        base:moviesGenre
    },
    moviesPoster:{
        base: moviesPoster
    }
}

export {baseUrl,urls}