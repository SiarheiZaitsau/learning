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
function App() {
    return (
        <Router>
            <div className="app">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
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
