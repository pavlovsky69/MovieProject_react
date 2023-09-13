const baseURL = process.env.REACT_APP_API


const moviesList = '/discover/movie';
const moviesGenre = '/genre/movie/list';
const moviesPoster='https://image.tmdb.org/t/p/w500'
// const moviesImage=''

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

export {baseURL,urls}