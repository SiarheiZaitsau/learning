import React from 'react'
import styles from './authContainer.module.scss'

function AuthContainer(props) {
    return <div className={styles.main}>{props.children}</div>
}

export default AuthContainer
