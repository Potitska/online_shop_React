import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {productsService} from "../../services";

const initialState = {
    products: []
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
    reducers: {},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action) => {
            state.products = action.payload
        })
});


const {reducer: productsReducer, actions} = slice;

const productsActions = {
    ...actions,
    getAll,
}

export {
    productsReducer,
    productsActions
}



