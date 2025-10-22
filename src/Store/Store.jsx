import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./Reducers/BookSlice";
import bookDetailsReducer from './Reducers/BookDetailsSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    bookDetails: bookDetailsReducer,
  },
});