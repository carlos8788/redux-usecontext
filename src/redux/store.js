import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './states/user';
import { cartSlice } from './states/cart';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store