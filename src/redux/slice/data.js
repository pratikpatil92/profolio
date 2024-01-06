import { baseUrl, getData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchHeading = createAsyncThunk('fetchHeading', async (arg, { dispatch }) => {
    try {
        dispatch(setGreetingsLoading(true))
        let result = await getData('/api/greeting?populate=*');
        result = result?.data?.attributes
        result = {
            ...result,
            profileImg: `${baseUrl}${result?.pic?.data?.attributes?.url}`
        }
        dispatch(setGreetings(result))
        dispatch(setGreetingsLoading(false))
        return result
    } catch (error) {
        dispatch(setGreetingsLoading(false))
        return error
    }
})

export const fetchAboutMe = createAsyncThunk('fetchAboutMe', async (arg, { dispatch }) => {
    try {
        dispatch(setAboutMeLoading(true))
        let result = await getData('/api/about?populate=*');
        result = result?.data?.attributes
        result = {
            ...result,
            aboutMeImg: `${baseUrl}${result?.aboutMePic?.data?.attributes?.url}`
        }
        dispatch(setAboutMe(result))
        dispatch(setAboutMeLoading(false))
        return result
    } catch (error) {
        dispatch(setAboutMeLoading(false))
        return error
    }
})



const dataSlice = createSlice({
    name: 'data',
    initialState: {
        greeting: {},
        loadingGreeting: true,
        aboutMe: {},
        aboutMeLoading: true,
    },
    reducers: {
        setGreetings: (state, action) => {
            state.greeting = action.payload
        },
        setGreetingsLoading: (state, action) => {
            state.loadingGreeting = action.payload
        },
        setAboutMe: (state, action) => {
            state.aboutMe = action.payload
        },
        setAboutMeLoading: (state, action) => {
            state.aboutMeLoading = action.payload
        },
    }
})

export const { setGreetings, setGreetingsLoading, setAboutMe, setAboutMeLoading } = dataSlice.actions

export default dataSlice.reducer
