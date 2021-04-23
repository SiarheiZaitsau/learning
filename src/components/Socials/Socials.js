import React from 'react'
import styles from './socials.module.scss'
import Facebook from '../../assets/facebook.png'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'

import cn from 'classnames'

function Socials(props) {
    const { className } = props
    return (
        <div className={styles.socials}>
            <a className={styles.link}>
                {' '}
                <img className={styles.icon} src={Facebook} />{' '}
            </a>
            <a className={styles.link}>
                {' '}
                <img className={styles.icon} src={Youtube} />{' '}
            </a>
            <a className={styles.link}>
                {' '}
                <img className={styles.icon} src={Instagram} />{' '}
            </a>
        </div>
    )
}

export default Socials
