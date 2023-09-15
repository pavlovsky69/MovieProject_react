import {configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices/moviesListSlice";
import {movieReducer} from "./slices/OneMovieSlice";



const store = configureStore ({
    reducer: {
        moviesList:moviesListReducer,
        OneMovie:movieReducer
    }
})

export {store}