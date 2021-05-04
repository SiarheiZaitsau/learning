import React from 'react'
import styles from './adblock.module.scss'
import MainImage from '../../assets/mainImage.png'
import Button from '../Button/Button'
import SliderButtons from '../Slider/SliderButtons'
import SliderControls from '../Slider/SliderControls'
function AdBlock() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        Новый крем для тела Moisturing Cream
                    </h2>
                    <p className={styles.text}>
                        Для гостей мероприятия выступили спикеры и рассказали о
                        достоинствах новых продуктах, поделились интересными
                        фактами исследования процессов старения
                    </p>
                    <div className={styles.sliderControls}>
                        <Button className={styles.button}> Подробнее</Button>
                        <SliderControls className={styles.dots} />
                        <SliderButtons className={styles.controls} />
                    </div>
                </div>
                <img className={styles.mainImage} src={MainImage}></img>
            </div>
            <div className={styles.mobileContainer}>
                <div className={styles.textContainer}>
                    <h2 className={styles.title}>
                        Новый крем для тела Moisturing Cream
                    </h2>
                    <img className={styles.mainImage} src={MainImage}></img>
                    <SliderControls className={styles.dots} />
                    <SliderButtons className={styles.controls} />
                    <p className={styles.text}>
                        Для гостей мероприятия выступили спикеры и рассказали о
                        достоинствах новых продуктах, поделились интересными
                        фактами исследования процессов старения
                    </p>
                    <div className={styles.sliderControls}>
                        <Button className={styles.button}> Подробнее</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AdBlock
