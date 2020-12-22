import types from "./contextActions";
import axios from "../api/api";

const GlobalContextReducer = (state, action) => {
    switch (action.type) {
        case types.SET_THEATER: {
            localStorage.setItem('theater', JSON.stringify(action.payload));
            return {...state, theater: action.payload}
        }
        case types.SET_USER: {
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
            return {...state, userData: action.payload}
        }
        case types.CLEAR_USER_DATA: {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            delete axios.defaults.headers.common['Authorization'];
            return {...state, userData: { token: '', user: ''}};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export default GlobalContextReducer;
