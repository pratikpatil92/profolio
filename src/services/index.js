import axios from "axios";

export const baseUrl = process.env.NODE_ENV === 'development'
    ? process.env.NEXT_PUBLIC_API_URL_LOCAL
    : process.env.NEXT_PUBLIC_API_URL_PRODUCTION;

export const getData = async (endpoint) => {
    try {
        let response = await axios.get(`${baseUrl + endpoint}`)
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const createData = async (endpoint, data) => {
    try {
        let response = await axios.post(`${baseUrl + endpoint}`, data)
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const updateData = async (endpoint, data) => {
    try {
        let response = await axios.put(`${baseUrl + endpoint}`, data)
        return response.data
    }
    catch (error) {
        throw error
    }
}

export const deleteData = async (endpoint) => {
    try {
        let response = await axios.delete(`${baseUrl + endpoint}`)
        return response.data
    }
    catch (error) {
        throw error
    }
}