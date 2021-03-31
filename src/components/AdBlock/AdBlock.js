import React from 'react';
import styles from './adblock.module.scss'
// import { ReactComponent as Pre } from '../../assets/slider-pre.svg';
// import { ReactComponent as Forward } from '../../assets/slider-next.svg'
import MainImage from "../../assets/mainImage.png"
function AdBlock() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>Новый крем для тела
                    Moisturing Cream</h2>
                <p className={styles.text}> Для гостей мероприятия выступили спикеры и рассказали
                    о достоинствах новых продуктах, поделились интересными фактами исследования процессов старения </p>
                <div className={styles.sliderControls}>
                    <button className={styles.button}> Подробнее</button>
                    <ul className={styles.list}>
                        <li className={styles.listItem}></li>
                        <li className={styles.listItem}></li>
                        <li className={styles.listItem}></li>
                        <li className={styles.listItem}></li>
                        <li className={styles.listItem}></li>
                    </ul>
                    <div className={styles.controls}>
                    {/* <Pre className={styles.pre} />
                    <Forward className={styles.next}/> */}
                    <button className={styles.pre, styles.slideButton}> &#5176;</button>
                    <button className={styles.next, styles.slideButton}> &#5171;</button>
                    </div>    
                </div>
            </div>
            <img className={styles.mainImage} src={MainImage}></img>
        </div>
    )
  }
  
  export default AdBlock;