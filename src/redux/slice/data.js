import { getData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHeading = createAsyncThunk('fetchHeading', async () => {
    try {
        const result = await getData('/greeting');
        return result
    } catch (error) {
        return error
    }
})

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        greeting: [],
        loading: false,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHeading.pending, (state, action) => {
            state.greeting = [];
            state.loading = true;
            state.isError = false
        })
        builder.addCase(fetchHeading.fulfilled, (state, action) => {
            state.greeting = action.payload;
            state.loading = false;
            state.isError = false
        })
        builder.addCase(fetchHeading.rejected, (state, action) => {
            state.greeting = action.payload;
            state.loading = false;
            state.isError = true
        })


    }
})

export default dataSlice.reducer
