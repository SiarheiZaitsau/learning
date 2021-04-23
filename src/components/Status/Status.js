import React from 'react'
import styles from './status.module.scss'
import cn from 'classnames'

function Status(props) {
    const { className, children } = props
    return <div className={cn(styles.status, className)}> {children}</div>
}

export default Status
