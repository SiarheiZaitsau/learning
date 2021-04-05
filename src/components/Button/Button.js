import React from 'react'
import styles from './button.module.scss'
import cn from 'classnames'
function Button(props) {
    const { children, className } = props
    return <button className={styles.button}> {children} </button>
}

export default Button
