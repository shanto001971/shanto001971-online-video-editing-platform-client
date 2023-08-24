import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async()=> {
    const res = await axios.get("http://localhost:5000/demoVideosData")
    return res.data;
})

const videosSlice = createSlice({
    name: 'videos',
    initialState: {
        isLoading: false,
        videos: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchVideos.pending, (state)=> {
            state.isLoading = true; 
        });
        builder.addCase(fetchVideos.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.videos = action.payload;
            state.error = null;
        });
        builder.addCase(fetchVideos.rejected, (state, action)=> {
            state.isLoading = false;
            state.videos = [];
            state.error = action.error.message;
        });
    }
});

export default videosSlice.reducer;