import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideosTemplate = createAsyncThunk("templateVideos/templateVideosData", async()=> {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/templateVideosData`)
    return res.data;
})

const templateVideosSlice = createSlice({
    name: 'templateVideos',
    initialState: {
        isLoading: false,
        templateVideos: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideosTemplate.pending, (state)=> {
            state.isLoading = true; 
        });
        builder.addCase(fetchVideosTemplate.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.templateVideos = action.payload;
            state.error = null;
        });
        builder.addCase(fetchVideosTemplate.rejected, (state, action)=> {
            state.isLoading = false;
            state.templateVideos = [];
            state.error = action.error.message;
        });
    }
});

export default templateVideosSlice.reducer;