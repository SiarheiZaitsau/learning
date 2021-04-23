import React from 'react'
import styles from './button.module.scss'
import cn from 'classnames'
function Button(props) {
    const { children, className } = props
    return (
        <button className={cn(styles.button, className)}> {children} </button>
    )
}

export default Button
