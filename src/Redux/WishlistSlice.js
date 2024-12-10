import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      const book = action.payload;
      const existing = state.find(item => item.book_details[0].title === book.book_details[0].title);
      if (!existing) {
        state.push(book);
      }
    },
    removeFromWishlist: (state, action) => {
      const book = action.payload;
      return state.filter(item => item.book_details[0].title !== book.book_details[0].title);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
