import React from 'react';
// import { useHistory } from 'react-router-dom'
import ReactDOM from 'react-dom';
// try Router instead of BrowserRouter and get the history function from phoenix code
import { Router, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const renderApp = () => {
    // const history = useHistory()
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

ReactDOM.render(renderApp(), document.getElementById('root'));