import React from 'react'
import styles from './gifts.module.scss'
import { ReactComponent as Next } from '../../assets/forward.svg'
import Gift1 from '../../assets/gifts1.png'
import Gift2 from '../../assets/gifts2.png'
import Gift3 from '../../assets/gifts3.png'
import Gift4 from '../../assets/gifts4.png'
import Button from '../Button/Button'
import PriceList from '../PriceList/PriceList'
import ProductCard from '../ProductCard/ProductCard'
function Gifts(props) {
    const data = [
        {
            img: Gift1,
            title: 'CeraVe Foaming Facial Cleanser',
            text: '1-ый очищающий гель, который удаляет всех виды загрязнений',
            price: {
                small: 452,
                medium: 786,
                large: 1230,
            },
        },
        {
            img: Gift2,
            title: 'CeraVe Foaming Facial Cleanser',
            text: '1-ый очищающий гель, который удаляет всех виды загрязнений',
            price: {
                small: 452,
                medium: 786,
                large: 1230,
            },
        },
        {
            img: Gift3,
            title: 'CeraVe Foaming Facial Cleanser',
            text: '1-ый очищающий гель, который удаляет всех виды загрязнений',
            price: {
                small: 452,
                medium: 786,
                large: 1230,
            },
        },
        {
            img: Gift4,
            title: 'CeraVe Foaming Facial Cleanser',
            text: '1-ый очищающий гель, который удаляет всех виды загрязнений',
            price: {
                small: 452,
                medium: 786,
                large: 1230,
            },
        },
    ]
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}> Каталог подарков </h2>
                <Button className={styles.button}>
                    <p className={styles.headerText}>
                        {' '}
                        Смотреть все{' '}
                        <span className={styles.hiddenText}>подарки </span>
                    </p>
                    <Next className={styles.nextIcon} />
                </Button>
            </div>
            <ul className={styles.list}>
                {data.map((item) => {
                    return <ProductCard item={item} />
                })}
            </ul>
        </div>
    )
}

export default Gifts
