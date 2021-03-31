import React from 'react';
import styles from './footer.module.scss';
import Facebook from '../../assets/facebook.png';
import Youtube from '../../assets/youtube.png';
import Instagram from '../../assets/instagram.png'
import Logo from '../../assets/bottomLogo.png'
function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.allRules}>© Все права защищены. CaveVe 2018.</p>
            <div className={styles.icons}>
                <a className={styles.link}> <img className={styles.icon} src={Facebook} /> </a>
                <a className={styles.link}> <img className={styles.icon} src={Youtube} /> </a>
                <a className={styles.link}> <img className={styles.icon} src={Instagram} /> </a>
            </div>
            <a className={styles.privacyPolicy}>Политика конфиденциальности</a>
            <img className={styles.logo} src={Logo} />
        </div>
    )
  }
  
  export default Footer;