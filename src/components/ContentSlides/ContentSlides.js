import React from 'react'
import styles from './contentSlides.module.scss'
import Button from '../Button/Button'
function ContentSlides() {
    const data = [
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
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {data.map((item) => {
                    return (
                        <li className={styles.listItem}>
                            <h3 className={styles.title}>
                                <span className={styles.number}>
                                    {' '}
                                    {item.number}{' '}
                                </span>
                                {item.title}{' '}
                            </h3>
                            <Button className={styles.button}>
                                {' '}
                                {item.buttonText}{' '}
                            </Button>
                        </li>
                    )
                })}
                {/* <li className={styles.listItem}>
                    <h3 className={styles.title}>
                        <span className={styles.number}> 132 </span>
                        Теста{' '}
                    </h3>
                    <Button className={styles.button}> Пройти тест </Button>
                </li> */}
                {/* <li className={styles.listItem}>
                    <h3 className={styles.title}>
                        {' '}
                        <span className={styles.number}> 141 </span> Презентация
                    </h3>
                    <Button className={styles.button}>
                        {' '}
                        Смотреть презентации{' '}
                    </Button>
                </li>
                <li className={styles.listItem}>
                    <h3 className={styles.title}>
                        {' '}
                        <span className={styles.number}> 236 </span> Статьи
                    </h3>
                    <Button className={styles.button}>Читать статьи</Button>
                </li> */}
            </ul>
        </div>
    )
}

export default ContentSlides
