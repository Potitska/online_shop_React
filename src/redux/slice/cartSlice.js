import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    itemsInCart: [],
    totalPrice: 0,
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
            state.totalPrice = state.itemsInCart.reduce((sum, product) => {
                return (product.price * product.count) + sum
            }, 0);
        },
        deleteItemFromCart: (state, action) => {
            state.itemsInCart = state.itemsInCart.filter(product => product.id !== action.payload)         //here we delete from cart
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