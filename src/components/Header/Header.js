import React from 'react'
import styles from './header.module.scss'
import Button from '../Button/Button'
import cn from 'classnames'
import classNames from 'classnames'

function Header() {
    return (
        <div className={styles.container}>
            <p className={styles.text}> У вас мероприятие через 3 дня </p>
            <div className={styles.buttonsContainer}>
                <Button className={styles.first}>
                    {' '}
                    Перейти к мероприятию{' '}
                </Button>

                <Button className={styles.second}> Закрыть </Button>
            </div>
        </div>
    )
}

export default Header
