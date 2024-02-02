import {configureStore} from "@reduxjs/toolkit";

import {productsReducer} from "./slice";
import cartReducer from './slice/cartSlice';

const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer
    }
});

export {
    store
}