import React from 'react'
import styles from './link.module.scss'
import { Link as RouterLink } from 'react-router-dom'
import cn from 'classnames'

function Link(props) {
    const { to, children, className } = props
    return (
        <RouterLink to={`/${to}`} className={cn(styles.link, className)}>
            {children}
        </RouterLink>
    )
}

export default Link
