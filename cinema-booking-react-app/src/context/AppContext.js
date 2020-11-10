import React from 'react'
import types from './types';

const AppStateContext = React.createContext();
const AppContextDispatchContext = React.createContext();

const currentTheater = JSON.parse(localStorage.getItem('theater')) || { id: 1, name: 'Kyiv'};

const initialState = {
    theater: currentTheater,
    userData: {
        token: localStorage.getItem('token') || '',
        userId: localStorage.getItem('userid') || ''
    }
}

function appReducer(state, action) {
    switch (action.type) {
        case types.SET_THEATER: {
            localStorage.setItem('theater', JSON.stringify(action.payload));
            return {...state, theater: action.payload}
        }
        case types.SET_USER: {
            localStorage.setItem('token', JSON.stringify(action.payload.token));
            localStorage.setItem('userid', JSON.stringify(action.payload.userId));
            return {...state, userData: action.payload}
        }
        case types.CLEAR_USER_DATA: {
            localStorage.removeItem('token');
            localStorage.removeItem('userid');
            return {...state, userData: { token: '', userId: ''}};
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

const AppContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(appReducer, initialState);

    return (
        <AppStateContext.Provider value={state}>
            <AppContextDispatchContext.Provider value={dispatch}>
                {children}
            </AppContextDispatchContext.Provider>
        </AppStateContext.Provider>
    )
};

function useAppState() {
    const context = React.useContext(AppStateContext);

    if (context === undefined)
        throw new Error('useCountState must be used within a CountProvider');

    return context;
}

function useAppDispatch() {
    const context = React.useContext(AppContextDispatchContext);

    if (context === undefined)
        throw new Error('useCountDispatch must be used within a CountProvider');

    return context;
}

function useAppContext() {
    return [useAppState(), useAppDispatch()];
}

export {AppContextProvider, useAppState, useAppDispatch, useAppContext};