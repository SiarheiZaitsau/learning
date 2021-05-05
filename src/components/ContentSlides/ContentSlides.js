import React from 'react'
import styles from './contentSlides.module.scss'
import Button from '../Button/Button'
import ContentCard from '../ContentCards/ContentCards'
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
                        <ContentCard item={item} className={styles.listItem} />
                    )
                })}
            </ul>
        </div>
    )
}

export default ContentSlides
