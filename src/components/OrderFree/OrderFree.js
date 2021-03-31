import React from 'react';
import styles from './orderFree.module.scss'
import AllProducts from '../../assets/category-all-productsv-13@3x.png';
function OrderFree() {
    return (
       <div className={styles.container}>
           <h2 className={styles.title}> Закажите мини-образцы </h2>
           <div className={styles.contentContainer}>
               <div>
               <p className={styles.text}>Закажите мини-образцы совершенно бесплатно и получите совершенно новые
                результаты по уходу за кожей вашего тела!</p>
                <button className={styles.button}>Заказть</button>
                </div>
                <img className={styles.image} src={AllProducts}/>
           </div>
       </div>
    )
  }
  
  export default OrderFree;