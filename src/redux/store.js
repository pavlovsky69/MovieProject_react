import {configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices/moviesListSlice";



const store = configureStore ({
    reducer: {
        moviesList:moviesListReducer
    }
})

export {store}