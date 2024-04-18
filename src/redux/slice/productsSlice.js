import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services";

const initialState = {
    products: [],
    searchValue: '',
    categoryFilter: '',
    isLoading: null,
};

const getAll = createAsyncThunk(
    'productSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await productsService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const slice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        },
        setCategoryValue: (state, action) => {
            state.categoryFilter = action.payload;
        }
    },
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.products = action.payload
            state.isLoading = false
        })
        .addCase(getAll.pending, (state, action) => {
            state.isLoading = true
        })
});


const {reducer: productsReducer, actions} = slice;

export const {setSearchValue} = slice.actions;

const productsActions = {
    ...actions,
    getAll,
}

export {
    productsReducer,
    productsActions
}



