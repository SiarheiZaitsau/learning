import React from 'react'
import styles from './linkto.module.scss'
import { Link } from 'react-router-dom'

function LinkTo(props) {
    const { text, tool } = props
    return (
        <Link to={`/${tool}`} className={styles.link}>
            {text}
        </Link>
    )
}

export default LinkTo
