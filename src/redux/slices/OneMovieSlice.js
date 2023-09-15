import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    id:0,
    movie: {},
};

const getId = createAsyncThunk (
    'OneMovieSlice/getId',
    async (id, thunkAPI) => {
        try {
            const {data} = await moviesService.getById(id)
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {

        }
    }
)


const slice = createSlice ({
    name: 'movieSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => builder
        .addCase (getId.fulfilled, (state, action) => {
            const {movie} = action.payload;
            state.movie = movie
        })
})

const {reducer: movieReducer, actions} = slice;

const movieActions = {
    ...actions,
    getId
}

export {
    movieReducer,
    movieActions
}