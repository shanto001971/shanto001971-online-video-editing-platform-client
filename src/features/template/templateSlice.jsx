import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTemplate = createAsyncThunk("template/fetchTemplate", async()=> {
    const res = await axios.get("http://localhost:5000/templateData")
    return res.data;
})

const templateSlice = createSlice({
    name: 'template',
    initialState: {
        isLoading: false,
        template: [],
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTemplate.pending, (state)=> {
            state.isLoading = true; 
        });
        builder.addCase(fetchTemplate.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.template = action.payload;
            state.error = null;
        });
        builder.addCase(fetchTemplate.rejected, (state, action)=> {
            state.isLoading = false;
            state.template = [];
            state.error = action.error.message;
        });
    }
});

export default templateSlice.reducer;