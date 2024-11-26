import { LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS } from "./actionTypes"

export const loginRequest = (payload) => ({
    type: LOGIN_REQUEST,
    payload: payload
})

export const loginRequestSuccess = (payload) => ({
    type: LOGIN_REQUEST_SUCCESS,
    payload: payload
})

export const loginRequestFailure = (error) => ({
    type: LOGIN_REQUEST_FAILURE,
    payload: error
})