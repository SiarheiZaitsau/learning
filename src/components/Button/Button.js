import React from 'react'
import cn from 'classnames'
import styles from './button.module.scss'

function Button(props) {
    console.log(styles, 'styles')
    const {
        children,
        className,
        isContained,
        isOutlined,
        ...buttonProps
    } = props

    return (
        <button
            className={cn(
                styles.button,
                {
                    [styles.outlined]: isOutlined,
                    [styles.contained]: isContained,
                },
                className
            )}
            {...buttonProps}
        >
            {children}
        </button>
    )
}
export default Button
