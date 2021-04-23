import React from 'react'
import styles from './auth.module.scss'
import { Route, Switch } from 'react-router'
import Login from '../Login/Login'
import Register from '../Register/Register'
function Auth() {
    return (
        <Switch>
            <Route exact path="/login">
                <Login />
            </Route>

            <Route exact path="/register">
                <Register />
            </Route>
        </Switch>
    )
}

export default Auth
