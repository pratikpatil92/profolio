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

export const fetchExprience = createAsyncThunk('fetchExprience', async (arg, { dispatch }) => {
    try {
        dispatch(setExprienceLoading(true))
        let result = await getData('/api/experiences?populate=*');

        result = result?.data.map((ele, index) => {
            ele.attributes = {
                ...ele.attributes,
                technologies: ele?.attributes?.description?.split(',')
            }
            return ele
        })
        result = result.sort((a, b) => a.id - b.id)
        dispatch(setExprienceData(result))
        dispatch(setExprienceLoading(false))
        return result
    } catch (error) {
        dispatch(setExprienceLoading(false))
        return error
    }
})
export const fetchProject = createAsyncThunk('fetchProject', async (arg, { dispatch }) => {
    try {
        dispatch(setProjectLoading(true))
        let result = await getData('/api/projects?populate=*');
        result = result?.data.map((ele, index) => {
            ele.attributes = {
                ...ele.attributes,
                _technologies: ele?.attributes?.technologies?.split(','),
                _description: ele?.attributes?.description?.split('.,'),
            }
            return ele
        })
        result = result.sort((a, b) => a.id - b.id)
        dispatch(setProjectData(result))
        dispatch(setProjectLoading(false))
        return result
    } catch (error) {
        dispatch(setProjectLoading(false))
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
        exprienceData: [],
        exprienceLoading: true,
        projectData: [],
        projectLoading: true
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
        setExprienceData: (state, action) => {
            state.exprienceData = action.payload
        },
        setExprienceLoading: (state, action) => {
            state.exprienceLoading = action.payload
        },
        setProjectData: (state, action) => {
            state.projectData = action.payload
        },
        setProjectLoading: (state, action) => {
            state.projectLoading = action.payload
        },
    }
})

export const {
    setGreetings, setGreetingsLoading, setAboutMe, setAboutMeLoading, setExprienceData,
    setExprienceLoading, setProjectData, setProjectLoading
} = dataSlice.actions

export default dataSlice.reducer
