import React from 'react'
import AuthContainer from '../../components/AuthContainer/AuthContainer'
import styles from './register.module.scss'
import Link from '../../components/Link/Link'
import Button from '../../components/Button/Button'
import StepNumber from '../../components/StepNumber/StepNumber'
import { ReactComponent as Forward } from '../../assets/forward.svg'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'
import Input from '../../components/Input/Input'
function Register() {
    return (
        <div className={styles.container}>
            <AuthContainer className={styles.main}>
                <button className={styles.iconContainer}>
                    <Forward className={styles.forward} />
                    <p className={styles.navText}> НАЗАД</p>
                </button>
                <h2 className={styles.title}> Регистрация </h2>
                <p className={styles.text}>
                    Для продолжения введите свой{' '}
                    <Link> персональный пин-код. </Link>
                </p>
                <form className={styles.form}>
                    <Input
                        placeholder="Введите пин-код"
                        className={styles.input}
                        type={'text'}
                    />
                    <div className={styles.nextStepContainer}>
                        <Button className={styles.button}> Продолжить </Button>
                        <StepNumber number={1} />
                    </div>
                </form>
            </AuthContainer>
            <div className={styles.background}>
                <Logo className={styles.logo} />
            </div>
        </div>
    )
}

export default Register
