import React from 'react'
import GlobalContextReducer from "./GlobalContextReducer";

const GlobalStateContext = React.createContext();
const GlobalContextDispatchContext = React.createContext();

const currentTheater = JSON.parse(localStorage.getItem('theater')) || { id: 1, name: 'Kyiv'};

const initialState = {
    theater: currentTheater,
    userData: {
        token: localStorage.getItem('token') || '',
        userId: localStorage.getItem('userid') || ''
    }
}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(GlobalContextReducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalContextDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalContextDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
};

function useAppState() {
    const context = React.useContext(GlobalStateContext);

    if (context === undefined)
        throw new Error('useCountState must be used within a CountProvider');

    return context;
}

function useAppDispatch() {
    const context = React.useContext(GlobalContextDispatchContext);

    if (context === undefined)
        throw new Error('useCountDispatch must be used within a CountProvider');

    return context;
}

function useAppContext() {
    return [useAppState(), useAppDispatch()];
}

export {GlobalContextProvider, useAppState, useAppDispatch, useAppContext};
