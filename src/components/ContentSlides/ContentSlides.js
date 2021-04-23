import React from 'react'
import styles from './contentSlides.module.scss'
import Button from '../Button/Button'

const SITE_STATS = [
    {
        number: 132,
        title: 'Теста',
        buttonText: 'Пройти тест',
    },
    {
        number: 141,
        title: 'Презентация',
        buttonText: 'Смотреть презинтации',
    },
    {
        number: 236,
        title: 'Статьи',
        buttonText: 'Читать статьи',
    },
]

function ContentSlides() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {SITE_STATS.map((item) => {
                    return (
                        <li className={styles.listItem}>
                            <h3 className={styles.title}>
                                <span className={styles.number}>
                                    {item.number}
                                </span>
                                {item.title}
                            </h3>
                            <Button className={styles.button}>
                                {item.buttonText}
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default ContentSlides
