import React from 'react'
import Home from './modules/Home/Home'
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link,
} from 'react-router-dom'
import Register from './modules/Register/Register'
import Login from './modules/Login/Login'
import Auth from './modules/Auth/Auth'

function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/auth">
                        <Auth />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
