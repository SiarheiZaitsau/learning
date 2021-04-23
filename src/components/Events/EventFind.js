import React from 'react'
import styles from './events.module.scss'
import cn from 'classnames'
import Shedule from '../../assets/ldate@3x.png'
import Place from '../../assets/lplace@3x.png'

function EventFind(props) {
    const { className } = props
    return (
        <ul className={styles.findList}>
            <li className={styles.findItem}>
                <img src={Shedule} className={styles.icon} />
                <p className={styles.eventFind}>17 - 25 января 2018</p>
            </li>
            <li className={styles.findItem}>
                <img src={Place} className={styles.icon} />
                <p className={styles.eventFind}>
                    Институт Прикладной Эстетики «Лаки Хаус», Ростов-на-Дону
                </p>
            </li>
        </ul>
    )
}

export default EventFind
