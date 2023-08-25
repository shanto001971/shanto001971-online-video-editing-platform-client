import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImages = createAsyncThunk("images/fetchImages", async()=> {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/demoImages`)
    return res.data;
})

const imagesSlice = createSlice({
    name: 'images',
    initialState: {
        isLoading: false,
        images: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImages.pending, (state)=> {
            state.isLoading = true; 
        });
        builder.addCase(fetchImages.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.images = action.payload;
            state.error = null;
        });
        builder.addCase(fetchImages.rejected, (state, action)=> {
            state.isLoading = false;
            state.images = [];
            state.error = action.error.message;
        });
    }
});

export default imagesSlice.reducer;