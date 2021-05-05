import React from 'react'
import styles from './events.module.scss'
import cn from 'classnames'
import Status from '../Status/Status'
import EventFind from './EventFind'
import Shedule from '../../assets/ldate@3x.png'
import Place from '../../assets/lplace@3x.png'

function Event(props) {
    const { className, item } = props
    return (
        <li className={styles.event}>
            <Status className={styles.eventStatus}> {item.status}</Status>
            <h3 className={styles.eventTitle}> {item.title}</h3>
            <p className={styles.text}>{item.text}</p>
            <ul className={styles.findList}>
                <EventFind icon={Shedule} text={item.date} />
                <EventFind icon={Place} text={item.place} />
            </ul>
        </li>
    )
}

export default Event
