import React from 'react'
import styles from './events.module.scss'
import cn from 'classnames'
import Shedule from '../../assets/ldate@3x.png'
import Place from '../../assets/lplace@3x.png'

function EventFind(props) {
    const { className, text, icon } = props
    return (
        <li className={styles.findItem}>
            <img src={icon} className={styles.icon} />
            <p className={styles.eventFind}>{text}</p>
        </li>
    )
}

export default EventFind
