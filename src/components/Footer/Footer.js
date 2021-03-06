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
            <Socials className={styles.socials} />
            <Link to={'#'} className={styles.link} isOutLink={true}>
                Политика конфиденциальности
            </Link>
            <img className={styles.logo} src={Logo} />
        </div>
    )
}

export default Footer
