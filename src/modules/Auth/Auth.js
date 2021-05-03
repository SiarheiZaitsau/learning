import React from 'react'
import styles from './auth.module.scss'
import { Route, Switch } from 'react-router'
import Login from '../Login/Login'
import Register from '../Register/Register'
function Auth() {
    return (
        <div>
            <div className="leftSide">
                <Switch>
                    <Route exact path="/auth">
                        <Login />
                    </Route>
                    <Route exact path="/auth/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
            <div className="rightSide">Hello</div>
        </div>
    )
}

export default Auth
