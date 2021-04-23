import React from 'react'
import styles from './feedback.module.scss'
import Select from '../Select/Select'
import TextArea from '../TextArea/TextArea'
function FeedBack() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Обратная связь </h2>
            <div className={styles.contentContainer}>
                <form className={styles.form}>
                    <p className={styles.formTitle}> Тема вопроса </p>
                    <Select />
                    <TextArea placeholder="Ниацинамид (Витамин В3) успокаивает кожу, снимая раздражения и покраснения.Глицерин в составе интенсивно увлажняет кожу. Обладает охлаждающим эффектом благодаря содержанию ментоксипропандиола. Восстанавливает минеральный баланс кожи?"></TextArea>
                    <button className={styles.button}>Отправить</button>
                </form>
            </div>
        </div>
    )
}

export default FeedBack
