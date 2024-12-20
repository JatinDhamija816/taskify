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
            withCredentials: true,
        })
        return res
    } catch (error) {
        return error
    }
}

export const check_login = async () => {
    try {
        const response = await axios.get(`${SERVER_PORT}/users/check_login`, {
            withCredentials: true,
        });

        return response
    } catch (error) {
        return error
    }
}

export const logout = async () => {
    try {
        const response = await axios.post(`${SERVER_PORT}/users/logout`, {},
            { withCredentials: true }
        )

        return response
    } catch (error) {
        return error
    }
}

export const createTask = async (data) => {
    try {
        const response = await axios.post(`${SERVER_PORT}/tasks/create`, data,
            { withCredentials: true }
        )

        return response
    } catch (error) {
        return error
    }
}