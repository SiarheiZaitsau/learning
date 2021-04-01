import React from 'react'
import styles from './header.module.scss'

function Header() {
    return (
        <div className={styles.container}>
            <p className={styles.text}> У вас мероприятие через 3 дня </p>
            <button className={(styles.button, styles.first)}>
                {' '}
                Перейти к мероприятию{' '}
            </button>
            <button className={(styles.button, styles.second)}>
                {' '}
                Закрыть{' '}
            </button>
        </div>
    )
}

export default Header
