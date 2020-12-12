import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/fonts.css';
import './index.sass';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
