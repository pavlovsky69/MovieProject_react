import {configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices/moviesListSlice";
import {movieReducer} from "./slices/OneMovieSlice";



const store = configureStore ({
    reducer: {
        moviesList:moviesListReducer,
        Movie:movieReducer
    }
})

export {store}