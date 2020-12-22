import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/fonts.css';
import './index.sass';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import axios from "./api/api";

const token = localStorage.getItem('token');

if (token && token !== 'undefined' && token !== '')
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
