import React from 'react'
import styles from './input.module.scss'
import cn from 'classnames'
function Input(props) {
    const { placeholder, className, type } = props
    console.log(type)
    return (
        <input
            placeholder={placeholder}
            type={type || 'text'}
            className={cn(styles.input, className)}
        />
    )
}

export default Input
