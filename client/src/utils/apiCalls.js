import { SERVER_PORT } from "../constants"
import axios from 'axios'

export const register = async (userData) => {
    try {
        const res = await axios.post(`${SERVER_PORT}/users/register`, userData)
        return res
    } catch (error) {
        return error
    }
}

export const login = async (loginData) => {
    try {
        const res = await axios.post(`${SERVER_PORT}/users/login`, loginData, {
            withCredentials: true, // Allow cookies to be sent and received
        })
        return res
    } catch (error) {
        return error
    }
}