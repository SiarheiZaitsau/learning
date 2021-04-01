import React from 'react'
import styles from './gifts.module.scss'
import { ReactComponent as Next } from '../../assets/forward.svg'
import Gift1 from '../../assets/gifts1.png'
import Gift2 from '../../assets/gifts2.png'
import Gift3 from '../../assets/gifts3.png'
import Gift4 from '../../assets/gifts4.png'
function Gifts() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2 className={styles.title}> Каталог подарков </h2>
                <p className={styles.headerText}> Смотреть все подарки</p>
                <Next className={styles.nextIcon} />
            </div>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <div className={styles.itemBackground}>
                        <img className={styles.firstImage} src={Gift1} />
                    </div>
                    <div className={styles.textContainer}>
                        <h4 className={styles.subTitle}>
                            CeraVe Foaming Facial Cleanser
                        </h4>
                        <p className={styles.text}>
                            {' '}
                            1-ый очищающий гель, который удаляет всех виды
                            загрязнений
                        </p>
                        <ul className={styles.priceList}>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 452 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    50 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 786 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    100 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 1230 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    250 мл (Банка)
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.itemBackground}>
                        <img className={styles.secondImage} src={Gift2} />
                    </div>
                    <div className={styles.textContainer}>
                        <h4 className={styles.subTitle}>
                            CeraVe Foaming Facial Cleanser
                        </h4>
                        <p className={styles.text}>
                            {' '}
                            1-ый очищающий гель, который удаляет всех виды
                            загрязнений
                        </p>
                        <ul className={styles.priceList}>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 452 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    50 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 786 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    100 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 1230 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    250 мл (Банка)
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.itemBackground}>
                        <img className={styles.thirdImage} src={Gift3} />
                    </div>
                    <div className={styles.textContainer}>
                        <h4 className={styles.subTitle}>
                            CeraVe Foaming Facial Cleanser
                        </h4>
                        <p className={styles.text}>
                            {' '}
                            1-ый очищающий гель, который удаляет всех виды
                            загрязнений
                        </p>
                        <ul className={styles.priceList}>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 452 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    50 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 786 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    100 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 1230 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    250 мл (Банка)
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className={styles.listItem}>
                    <div className={styles.itemBackground}>
                        <img className={styles.fourthImage} src={Gift4} />
                    </div>
                    <div className={styles.textContainer}>
                        <h4 className={styles.subTitle}>
                            CeraVe Foaming Facial Cleanser
                        </h4>
                        <p className={styles.text}>
                            {' '}
                            1-ый очищающий гель, который удаляет всех виды
                            загрязнений
                        </p>
                        <ul className={styles.priceList}>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 452 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    50 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 786 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    100 мл (Тюбик)
                                </p>
                            </li>
                            <li className={styles.priceItem}>
                                <p className={styles.price}> 1230 руб.</p>
                                <p className={styles.description}>
                                    {' '}
                                    250 мл (Банка)
                                </p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Gifts
