import React from 'react'
import styles from './slider.module.scss'
import cn from 'classnames'

function SliderControls(props) {
    const { className } = props
    return (
        <ul className={cn(styles.list, className)}>
            <li className={styles.listItem}></li>
            <li className={styles.listItem}></li>
            <li className={styles.listItem}></li>
            <li className={styles.listItem}></li>
            <li className={styles.listItem}></li>
        </ul>
    )
}

export default SliderControls
