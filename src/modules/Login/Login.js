import React from 'react'
import styles from './login.module.scss'
import LinkText from '../../components/LinkText/LinkText'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'
import Input from '../../components/Input/Input'
import AuthContainer from '../../components/AuthContainer/AuthContainer'
function Login() {
    return (
        <div className={styles.container}>
            <AuthContainer>
                <h2 className={styles.title}> Авторизация </h2>
                <p className={styles.text}>
                    Если у вас ещё нет аккаунта, мы можете{' '}
                    <LinkText
                        link="register"
                        text="оставить заявку на регистрацию."
                    />
                </p>
                <Form>
                    <Input placeholder="E-mail" />
                    <Input last={true} placeholder="Пароль" />
                    <p className={styles.formText}>
                        {' '}
                        <LinkText text="Забыли пароль?" />{' '}
                    </p>
                    <Button className={styles.button} text="Войти" />
                </Form>
            </AuthContainer>
            <div className={styles.background}>
                <Logo className={styles.logo} />
            </div>
        </div>
    )
}

export default Login
