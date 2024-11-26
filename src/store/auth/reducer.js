import { LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS } from "./actionTypes"

const INITIAL_STATE = {
    user: null,
    login_loading: null,
    login_error: null,
}

const Authentication = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return {
                ...state,
                login_loading: true
            }
        case LOGIN_REQUEST_SUCCESS:
            return {
                ...state,
                login_loading: false,
                user: action.payload
            }
        case LOGIN_REQUEST_FAILURE:
            return {
                ...state,
                login_loading: false,
                login_error: action.payload
            }
        default:
            return state
    }
}

export default Authentication