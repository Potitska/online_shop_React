import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {productsService} from "../../services";

const initialState = {
    products: [],
    categories: []
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

const getAllCategories = createAsyncThunk(
    'productSlice/getAllCategories',
    async (_, thunkAPI) => {
        try {
            const {data} = await productsService.getAllProductsCategories();
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
        .addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload
        })
});


const {reducer: productsReducer, actions} = slice;

const productsActions = {
    ...actions,
    getAll,
    getAllCategories
}

export {
    productsReducer,
    productsActions
}



