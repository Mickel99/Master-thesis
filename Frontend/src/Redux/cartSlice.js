import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addToCartAPI, removeFromCartAPI } from "./Cart/cartApiCall";

// Hjälpfunktion för att hämta värden från local storage
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
        // Om artikeln redan finns i kundvagnen, öka bara kvantiteten
        state.cartItems = state.cartItems.map((item) =>
          item.id === newItem.id
            ? { ...newItem, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Om artikeln inte finns i kundvagnen, lägg till den med kvantitet 1
        const newItemWithDetails = {
          ...newItem,
          quantity: 1,
          image: newItem.image,
          price: newItem.price,
        };
        state.cartItems = [...state.cartItems, newItemWithDetails];
      }
      // Uppdatera local storage med de nya cartItems
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
      // Utför API-anrop för att ta bort från kundvagnen och uppdatera state
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
