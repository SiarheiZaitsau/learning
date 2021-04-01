import React from 'react'
import styles from './linkText.module.scss'
import { Link } from 'react-router-dom'

function LinkText(props) {
    const { text, link } = props
    return (
        <Link to={`/${link}`} className={styles.link}>
            {text}
        </Link>
    )
}

export default LinkText
