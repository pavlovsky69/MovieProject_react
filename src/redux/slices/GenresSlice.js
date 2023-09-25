// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import {genreService} from "../../services/genreService";
//
//
// const initialState = {
//     with_genres: 0,
//     page: 0,
//     genresList: []
// }
//
// const getAllGenres = createAsyncThunk (
//     'getAllGenres',
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
// const GenresSlice = createSlice ({
//     name: 'GenresSlice',
//     initialState,
//     reducers: {},
//     extraReducers: builder => builder
//         .addCase (getAllGenres.fulfilled, (state, action) => {
//             const {page, results} = action.payload;
//             state.page = page
//             state.moviesList = results
//         })
// })
//
// const {reducer: GenresListReducer, actions} = GenresSlice;
//
// const GenreListAction={
//     ...actions,
//     getAllGenres
// }
//
// export {
//     GenresListReducer,
//     GenreListAction
// }