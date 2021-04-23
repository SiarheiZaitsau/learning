import React from 'react'
import styles from './select.module.scss'
import cn from 'classnames'

function Select(props) {
    const { className, options } = props
    return (
        <select className={styles.select}>
            <option className={styles.option}>Без темы</option>
            <option className={styles.option}>Apples</option>
            <option className={styles.option}>Bananas</option>
            <option className={styles.option}>Grapes</option>
            <option className={styles.option}>Oranges</option>
        </select>
    )
}

export default Select
