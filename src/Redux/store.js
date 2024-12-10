import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from './WishlistSlice'; 

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer, // Register the wishlist reducer
  },
});

export default store;
