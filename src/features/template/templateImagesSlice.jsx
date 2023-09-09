import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchImgTemplate = createAsyncThunk("templateImg/demoImagesTemplate", async()=> {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/demoImagesTemplate`)
    return res.data;
}) //TODO: Url changes

const templateImgSlice = createSlice({
    name: 'templateImg',
    initialState: {
        isLoading: false,
        templateImg: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchImgTemplate.pending, (state)=> {
            state.isLoading = true; 
        });
        builder.addCase(fetchImgTemplate.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.templateImg = action.payload;
            state.error = null;
        });
        builder.addCase(fetchImgTemplate.rejected, (state, action)=> {
            state.isLoading = false;
            state.templateImg = [];
            state.error = action.error.message;
        });
    }
});

export default templateImgSlice.reducer;