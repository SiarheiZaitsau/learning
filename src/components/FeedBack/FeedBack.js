import React from 'react'
import styles from './feedback.module.scss'
import Select from '../Select/Select'
import TextArea from '../TextArea/TextArea'
import Button from '../../components/Button/Button'
function FeedBack() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}> Обратная связь </h2>
            <div className={styles.contentContainer}>
                <form className={styles.form}>
                    <p className={styles.formTitle}> Тема вопроса </p>
                    <Select
                        options={[
                            'Без темы',
                            'Apples',
                            'Bananas',
                            'Grapes',
                            'Oranges',
                        ]}
                    />
                    <TextArea placeholder="Ниацинамид (Витамин В3) успокаивает кожу, снимая раздражения и покраснения.Глицерин в составе интенсивно увлажняет кожу. Обладает охлаждающим эффектом благодаря содержанию ментоксипропандиола. Восстанавливает минеральный баланс кожи?"></TextArea>
                    <Button className={styles.button}>Отправить</Button>
                </form>
            </div>
        </div>
    )
}

export default FeedBack
