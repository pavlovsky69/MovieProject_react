import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";
import {genreService} from "../../services/genreService";


const initialState = {
    genresList: []
}


const getAllGenres = createAsyncThunk (
    'genresListSlice/getAllGenres',
    async (thunkAPI) => {
        try {
            const {data} = await genreService.getAllGenres ();
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {

        }

    }
)

const genresListSlice = createSlice ({
    name: 'genresListSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase (getAllGenres.fulfilled, (state, action) => {
            const {genres} = action.payload
            state.genresList = genres
        })
})


const {reducer: genresListReducer, actions} = genresListSlice;

const genresListAction = {
    ...actions,
    getAllGenres
}

export {
    genresListReducer,
    genresListAction
}