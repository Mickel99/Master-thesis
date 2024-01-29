import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartAPI, removeFromCartAPI } from "./Cart/cartApiCall";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const isItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      if (isItemExistInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id ? { ...newItem, quantity: item.quantity + 1 } : item
        );
      } else {
        const newItemWithDetails = {
          ...newItem,
          quantity: 1,
          image: newItem.image,
          price: newItem.price,
        };
        state.cartItems = [...state.cartItems, newItemWithDetails];
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});

const cartActions = cartSlice.actions;

export const addToCartAsync = createAsyncThunk(
  'cart/addToCartAsync',
  async (newItem, { dispatch }) => {
    try {
      await addToCartAPI(newItem);
      dispatch(cartActions.addItemToCart(newItem));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  }
);

export const removeFromCartAsync = createAsyncThunk(
  'cart/removeFromCartAsync',
  async (id, { dispatch }) => {
    try {
      await removeFromCartAPI(id);
      dispatch(cartActions.removeItemFromCart(id));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }
);

const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer, };
