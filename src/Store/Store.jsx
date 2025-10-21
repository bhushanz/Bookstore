import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Reducers/BookSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});