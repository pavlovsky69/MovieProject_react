import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {moviesService} from "../../services/moviesService";

const initialState = {
    page: 0,
    moviesList: [],
    nextPage:null,
    prevPage: null
};

const getAll = createAsyncThunk (
    'moviesListSlice/getAll',
    async (page, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll (page);
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {

        }
    }
)


const slice = createSlice ({
    name: 'moviesListSlice',
    initialState,
    reducers: {
    },
    extraReducers: builder => builder
        .addCase (getAll.fulfilled, (state, action) => {
            const {page, results} = action.payload;
            state.page = page
            state.moviesList = results
        })
})

const {reducer: moviesListReducer, actions} = slice;

const moviesListActions = {
    ...actions,
    getAll
}

export {
    moviesListReducer,
    moviesListActions
}