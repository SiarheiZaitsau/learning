import React from 'react';
import styles from './contentSlides.module.scss'

function ContentSlides() {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <h3 className={styles.title}> <span className={styles.number}> 132 </span> Теста</h3>
                    <button className={styles.button}> Пройти тест </button>
                </li>
                <li className={styles.listItem}>
                    <h3 className={styles.title}> <span className={styles.number}> 141 </span> Презентация</h3>
                    <button className={styles.button}> Смотреть презентации </button>
                </li>
                <li className={styles.listItem}>
                    <h3 className={styles.title}> <span className={styles.number}> 236 </span> Статьи</h3>
                    <button className={styles.buttonLast}> Читать статьи </button>
                </li>
            </ul>
        </div>
    )
  }
  
  export default ContentSlides;