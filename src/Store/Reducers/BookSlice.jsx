import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
   export const fetchBooks = createAsyncThunk("books/fetchBooks", async (quiry ='thriller') => {
  const response = await axios.get(
  `  https://openlibrary.org/subjects/${quiry}.json?limit=20`

  );
  console.log(response.data.works)
  return response.data.works;
});

 const BookSlice =createSlice({
       name:'books',
       initialState:{
        items:[],
        status:'loading',
        error:null,
       },
       reducers:{ },
       extraReducers:(builder)=>{
        builder
        .addCase(fetchBooks.pending,(state)=>{
            state.status='loading'
        })
        .addCase(fetchBooks.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.items=action.payload;
        })
         .addCase(fetchBooks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
       }
 })

 export  default  BookSlice.reducer