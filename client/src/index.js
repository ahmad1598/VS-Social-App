import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import DataProvider from './context/DataProvider.js'
import './style/Style.css'

ReactDOM.render(
    <BrowserRouter>
        <DataProvider>
            <App />
        </DataProvider>
    </BrowserRouter>,document.getElementById('root'));

