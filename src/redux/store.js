import {configureStore} from "@reduxjs/toolkit";
import {moviesListReducer} from "./slices/moviesListSlice";
import {movieReducer} from "./slices/OneMovieSlice";
import {themeReducer} from "./slices/themeSlice";
import {genresListReducer} from "./slices/GenreListSlice";
import {progressReducer} from "./slices/progressSlice";
import {GenresByIdReducer} from "./slices/GenresByIdSlice";
import {searchReducer} from "./slices/searchSlice";



const store = configureStore ({
    reducer: {
        moviesList:moviesListReducer,
        Movie:movieReducer,
        theme:themeReducer,
        genresList:genresListReducer,
        genresById:GenresByIdReducer,
        progress: progressReducer,
        search: searchReducer,
        searchCheck: searchReducer
    }
})

export {store}