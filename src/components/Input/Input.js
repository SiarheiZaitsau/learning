import React from 'react'
import styles from './input.module.scss'
import cn from 'classnames'
function Input(props) {
    const { placeholder, last } = props
    return (
        <input
            placeholder={placeholder}
            type="text"
            className={cn(styles.input, last && styles.lastInput)}
        />
    )
}

export default Input
