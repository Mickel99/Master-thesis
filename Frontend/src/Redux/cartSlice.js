import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartAPI, removeFromCartAPI } from "./Cart/cartApiCall";

// Helper function to retrieve values from local storage
const getCartItemsFromStorage = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: getCartItemsFromStorage(),
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const isItemExistInCart = state.cartItems.find(
        (cartItem) => cartItem.id === newItem.id
      );

      if (isItemExistInCart) {
// If the item is already in the cart, just increase the quantity
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id
            ? { ...newItem, quantity: item.quantity + 1 }
            : item
        );
      } else {
// If the item is not in the cart, add it with quantity 1
        const newItemWithDetails = {
          ...newItem,
          quantity: 1,
          image: newItem.image,
          price: newItem.price,
        };
        state.cartItems = [...state.cartItems, newItemWithDetails];
      }
// Update local storage with the new cartItems
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const addToCartAsync = createAsyncThunk(
  "cart/addToCartAsync",
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
  "cart/removeFromCartAsync",
  async (id, { dispatch }) => {
    try {
// Make API calls to remove from cart and update state
      await removeFromCartAPI(id);
      dispatch(cartActions.removeItemFromCart(id));
    } catch (error) {
      console.error("Error removing from cart:", error);
    }
  }
);

const cartActions = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export { cartActions, cartReducer };
