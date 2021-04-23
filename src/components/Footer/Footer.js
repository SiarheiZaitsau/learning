import React from 'react'
import styles from './footer.module.scss'
import Logo from '../../assets/bottomLogo.png'
import Link from '../Link/Link'
import Socials from '../Socials/Socials'
function Footer() {
    return (
        <div className={styles.container}>
            <p className={styles.allRules}>
                © Все права защищены. CaveVe 2018.
            </p>
            <Socials />
            <Link to={'#'} className={styles.link}>
                <a className={styles.privacyPolicy}>
                    Политика конфиденциальности
                </a>{' '}
            </Link>
            <img className={styles.logo} src={Logo} />
        </div>
    )
}

export default Footer
