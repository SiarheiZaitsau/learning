import React from 'react'
import styles from './productCard.module.scss'
import cn from 'classnames'
import PriceList from '../PriceList/PriceList'
function ProductCard(props) {
    const { children, className, item } = props
    return (
        <li className={styles.listItem}>
            <div className={styles.itemBackground}>
                <img className={styles.firstImage} src={item.img} />
            </div>
            <div className={styles.textContainer}>
                <h4 className={styles.subTitle}>{item.title}</h4>
                <p className={styles.text}>{item.text}</p>
            </div>
            <PriceList price={item.price} />
        </li>
    )
}

export default ProductCard
