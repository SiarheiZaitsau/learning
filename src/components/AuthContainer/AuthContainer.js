import React from 'react'
import styles from './authContainer.module.scss'
import logo from '../../assets/logo-white@3x.png'
function AuthContainer(props) {
    return (
        <div className={styles.container}>
            <img className={styles.logo} src={logo} />
            {props.children}
        </div>
    )
}

export default AuthContainer
