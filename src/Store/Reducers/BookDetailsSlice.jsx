import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBookDetails = createAsyncThunk(
  "bookDetails/fetchBookDetails",
  async (bookId) => {
    const response = await axios.get(
      `https://openlibrary.org/works/${bookId}.json`
    );
    return response.data;
  }
);

const BookDetailSlice = createSlice({
  name: "bookDetails",
  initialState: {
    items: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookDetails.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchBookDetails.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default BookDetailSlice.reducer;
