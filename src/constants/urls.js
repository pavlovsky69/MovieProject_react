const baseURL = process.env.REACT_APP_API

const movie='/movie'
const moviesList = '/discover/movie';
const moviesGenre = '/genre/movie/list';
const moviesPoster='https://image.tmdb.org/t/p/w500'
// const moviesImage=''


const urls = {
    moviesList:{
        base:moviesList,
        byId:(id)=>`${movie}/${id}`
    },
    moviesGenre:{
        base:moviesGenre
    },
    moviesPoster:{
        base: moviesPoster
    },
    movie:{
        byId:(id)=>`${movie}/${id}`
    }
}

export {baseURL,urls}