import { createSlice } from '@reduxjs/toolkit';

export const SLICE_KEYS = {
  WISHLIST: 'WISHLIST',
}

const wishListSlice = createSlice({
  name: 'wishlist',
  initialState: {
    [SLICE_KEYS.WISHLIST]: [],
  },
  reducers: {
    toggleWishlist: (state, action) => {
    const isItemInWishlist = state[SLICE_KEYS.WISHLIST].some(wishlistItem => wishlistItem.id === action.payload.id);

    if (isItemInWishlist) {
      const updatedWishlist = state[SLICE_KEYS.WISHLIST].filter(wishlistItem => wishlistItem.id !== action.payload.id);
      state[SLICE_KEYS.WISHLIST]=updatedWishlist;
    } else {
      state[SLICE_KEYS.WISHLIST] =[...state[SLICE_KEYS.WISHLIST], action.payload];
    }

    },
  },
});

export const { toggleWishlist } = wishListSlice.actions;
export const wishListData = (state) =>  state.WISHLIST;

export default wishListSlice.reducer;
