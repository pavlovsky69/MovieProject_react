import {configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices/moviesListSlice";
import {movieReducer} from "./slices/OneMovieSlice";
import {themeReducer} from "./slices/themeSlice";



const store = configureStore ({
    reducer: {
        moviesList:moviesListReducer,
        Movie:movieReducer,
        theme:themeReducer
    }
})

export {store}