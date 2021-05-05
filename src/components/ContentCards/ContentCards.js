import React from 'react'
import styles from './contentCards.module.scss'
import cn from 'classnames'
import Button from '../Button/Button'
function ContentCard(props) {
    const { children, className, item } = props
    return (
        <li className={styles.listItem}>
            <h3 className={styles.title}>
                <span className={styles.number}>{item.number}</span>
                {item.title}
            </h3>
            <Button className={styles.button}>{item.buttonText}</Button>
        </li>
    )
}

export default ContentCard
