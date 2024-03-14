import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
    quantity: 1
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItemInCart(state, action) {
            const findItem = state.itemsInCart.find((product) => product.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.itemsInCart.push({
                    ...action.payload,
                    count: 1,
                })
            }
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)
        },
        minusItem(state, action) {
            const findItem = state.itemsInCart.find((product) => product.id === action.payload)

            if (findItem) {
                findItem.count--;
            }
        },
        clearItems(state, action) {
            state.itemsInCart = [];
            state.totalPrice = 0;
        }

    }
});

export const {setItemInCart, deleteItemFromCart, plusItem, minusItem, clearItems} = cartSlice.actions;
export default cartSlice.reducer;