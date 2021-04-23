import React from 'react'
import styles from './login.module.scss'
import Link from '../../components/Link/Link'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'
import Input from '../../components/Input/Input'
import AuthContainer from '../../components/AuthContainer/AuthContainer'
import cn from 'classnames'
function Login() {
    return (
        <div className={styles.container}>
            <AuthContainer className={styles.main}>
                <h2 className={styles.title}> Авторизация </h2>
                <p className={styles.text}>
                    Если у вас ещё нет аккаунта, мы можете{' '}
                    <Link to="register" className={styles.link}>
                        оставить заявку на регистрацию.
                    </Link>
                </p>
                <Form>
                    <Input
                        placeholder="E-mail"
                        className={styles.input}
                        type={'text'}
                    />
                    <Input
                        placeholder="Пароль"
                        className={cn(styles.input, styles.lastInput)}
                        type={'password'}
                    />
                    <p className={styles.formText}>
                        {' '}
                        <Link> Забыли пароль? </Link>
                    </p>
                    <Button className={styles.button}> Войти </Button>
                </Form>
            </AuthContainer>
            <div className={styles.background}>
                <Logo className={styles.logo} />
            </div>
        </div>
    )
}

export default Login
