import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {searchService} from "../../services/searchService";

const initialState = {
    searchList:[],
    searchCheck:false
};

const getByQuery = createAsyncThunk (
    'searchSlice/getByQuery',
    async ({query}, thunkAPI) => {
        try {
            const {data} = await searchService.getByQuery ({query});
            return data
        } catch
            (e) {
            return thunkAPI.rejectWithValue (e.response.data)
        } finally {
        }
    }
)

const searchSlice = createSlice ({
    name: 'searchSlice',
    initialState,
    reducers: {
    changeSearchCheck: state => {
        state.searchCheck = !state.searchCheck
    }
    },
    extraReducers: builder => builder
        .addCase (getByQuery.fulfilled, (state, action) => {
            const {results} = action.payload;
            state.searchList = results
        })
})


const {reducer: searchReducer, actions} = searchSlice;

const searchActions = {
    ...actions,
    getByQuery
}

export {
    searchReducer,
    searchActions
}






//
// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState = {
//     themeCheck: false
// }
//
// const themeSlice = createSlice ({
//     name: 'themeSlice',
//     initialState,
//     reducers: {
//         changeThemeCheck: state => {
//             state.themeCheck = !state.themeCheck
//         }
//     }
// })
//
// const {reducer: themeReducer, actions: themeActions} = themeSlice;
//
// export {
//     themeReducer,
//     themeActions
// }
//