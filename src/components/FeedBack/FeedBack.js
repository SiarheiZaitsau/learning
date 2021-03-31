import React from 'react';
import styles from './feedback.module.scss'

function FeedBack() {

    return (
        <div className={styles.container}>
           <h2 className={styles.title}> Обратная связь </h2>
           <div className={styles.contentContainer}>
               <form className={styles.form}>
                   <p className={styles.formTitle}> Тема вопроса </p>
                   <select className={styles.select}> 
                        <option>Без темы</option> 
                        <option>Apples</option> 
                        <option>Bananas</option> 
                        <option>Grapes</option> 
                        <option>Oranges</option> 
                    </select>
                    <textarea className={styles.input} placeholder="Ниацинамид (Витамин В3) успокаивает кожу, снимая раздражения и покраснения.Глицерин в составе интенсивно увлажняет кожу. Обладает охлаждающим эффектом благодаря содержанию ментоксипропандиола. Восстанавливает минеральный баланс кожи?" type="text" />
                    <p className={styles.inputLength}> 233 / 500</p>
                    <button className={styles.button}>Отправить</button>
               </form>
           </div>
       </div> 
    )
  }
  
  export default FeedBack;