import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {genreService} from "../../services/genreService";


const initialState = {
    id:'14',
    page: '1',
    genresById: []
}

const getByGenre = createAsyncThunk (
    'getByGenre',
    async ({id, page}, thunkAPI) => {
        try {
            const {data} = await genreService.getByGenre (id, page);
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {

        }
    }
)


const GenresByIdSlice = createSlice ({
    name: 'GenresByIdSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase (getByGenre.fulfilled, (state, action) => {
            const {results, id, page} = action.payload;
            state.genresById = results
            state.id=id
            state.page=page
        })
})

const {reducer: GenresByIdReducer, actions} = GenresByIdSlice;

const GenresByIdAction = {
    ...actions,
    getByGenre
}

export {
    GenresByIdReducer,
    GenresByIdAction
}


//
//
//
// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {genreService} from "../../services/genreService";
//
//
// const initialState = {
//     with_genres: null,
//     genresList: []
// }
//
// const getByGenre = createAsyncThunk (
//     'getByGenre',
//     async (with_genres, page, thunkAPI) => {
//         try {
//             const {data} = await genreService.getByGenre ({with_genres}, {page});
//             return data
//         } catch
//             (e) {
//             return thunkAPI.rejectWithValue (e.response.data)
//         } finally {
//
//         }
//     }
// )
//
//
// const GenresByIdSlice = createSlice ({
//     name: 'GenresByIdSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder => builder
//         .addCase (getByGenre.fulfilled, (state, action) => {
//             const {results} = action.payload;
//             state.genresById = results
//         })
// })
//
// const {reducer: GenresByIdReducer, actions} = GenresByIdSlice;
//
// const GenresByIdAction={
//     ...actions,
//     getByGenre
// }
//
// export {
//     GenresByIdReducer,
//     GenresByIdAction
// }