import React from 'react'
import styles from './authContainer.module.scss'
import cn from 'classnames'
function AuthContainer(props) {
    const { children, className } = props
    return <div className={cn(styles.main, className)}>{children}</div>
}

export default AuthContainer
