import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
 
   export const fetchBooks = createAsyncThunk("books/fetchBooks", async ( {type = "category", value = 'horror'}) => {
    let url;
    if(type==='category'){
        url =`  https://openlibrary.org/subjects/${value}.json?limit=20`
    }
    else if(type==="search"){
         url = `https://openlibrary.org/search.json?q=${value}&limit=20`;
    }
  const response = await axios.get(url);
  console.log(response.data.works)
  return type ==="category"? response.data.works :response.data.docs;
});

 const BookSlice =createSlice({
       name:'books',
       initialState:{
        items:[],
        status:'idle',
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