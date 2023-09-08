import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchVideosTemplate = createAsyncThunk("templateVideos/demoVideoTemplate", async()=> {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/demoVideoTemplate`)
    return res.data;
})

const templateVideosSlice = createSlice({
    name: 'templateVideos',
    initialState: {
        isLoading: false,
        templateVideos: [],
        error: null,
        selectedData: null,
    },
    reducers: {
        setSelectedData2: (state, action) => {
          state.selectedData = action.payload;
        },
      },
    extraReducers: (builder) => {
        builder.addCase(fetchVideosTemplate.pending, (state)=> {
            state.isLoading = true; 
        });
        builder.addCase(fetchVideosTemplate.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.templateVideos = action.payload;
            state.selectedData = action.payload[0]?.data[0];
            state.error = null;
        });
        builder.addCase(fetchVideosTemplate.rejected, (state, action)=> {
            state.isLoading = false;
            state.templateVideos = [];
            state.error = action.error.message;
        });
    }
});

export const { setSelectedData2 } = templateVideosSlice.actions;

export default templateVideosSlice.reducer;