import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

ReactDOM.render(
    <React.StrictMode>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300&display=swap"
            rel="stylesheet"
        />
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
