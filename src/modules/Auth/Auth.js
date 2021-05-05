import React from 'react'
import styles from './auth.module.scss'
import { Route, Switch } from 'react-router'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'
function Auth() {
    return (
        <div className={styles.authContainer}>
            <div className={styles.main}>
                <Switch>
                    <Route exact path="/auth">
                        <Login />
                    </Route>
                    <Route exact path="/auth/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
            {/* TODO: тут должно быть лого */}
            <div className={styles.background}>
                <Logo className={styles.logo} />
            </div>
        </div>
    )
}

export default Auth
