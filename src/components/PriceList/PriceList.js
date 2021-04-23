import React from 'react'
import styles from './priceList.module.scss'
import cn from 'classnames'

function PriceList(props) {
    const { price } = props
    console.log(price.small, 'price')
    return (
        <ul className={styles.priceList}>
            <li className={styles.priceItem}>
                <p className={styles.price}> {price.small} руб.</p>
                <p className={styles.description}> 50 мл (Тюбик)</p>
            </li>
            <li className={styles.priceItem}>
                <p className={styles.price}> {price.medium} руб.</p>
                <p className={styles.description}> 100 мл (Тюбик)</p>
            </li>
            <li className={styles.priceItem}>
                <p className={styles.price}> {price.large} руб.</p>
                <p className={styles.description}> 250 мл (Банка)</p>
            </li>
        </ul>
    )
}

export default PriceList
