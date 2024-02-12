import { createSlice } from '@reduxjs/toolkit';

export const cartEmptyState = {
    prtoducts: [],
    total: 0,
    count: 0,
}

export const cartSlice = createSlice({

    name: 'cart',
    initialState: cartEmptyState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.total -= state.items[index].price;
                state.items.splice(index, 1); 
            }
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;