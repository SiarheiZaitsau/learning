import React from 'react'
import styles from './login.module.scss'
import LinkTo from '../../components/LinkTo/LinkTo'
import Button from '../../components/Button/Button'
import Form from '../../components/Form/Form'
import { ReactComponent as Logo } from '../../assets/logo-white.svg'
import Input from '../../components/Input/Input'
import AuthContainer from '../../components/AuthContainer/AuthContainer'
import cn from 'classnames'
function Login() {
    return (
        <div className={styles.container}>
            <AuthContainer>
                <h2 className={styles.title}> Авторизация </h2>
                <p className={styles.text}>
                    Если у вас ещё нет аккаунта, мы можете{' '}
                    <LinkTo
                        tool="register"
                        text="оставить заявку на регистрацию."
                        className={styles.link}
                    />
                </p>
                <Form>
                    <Input placeholder="E-mail" className={styles.input} />
                    <Input
                        placeholder="Пароль"
                        className={cn(styles.input, styles.lastInput)}
                    />
                    <p className={styles.formText}>
                        {' '}
                        <LinkTo text="Забыли пароль?" />{' '}
                    </p>
                    <Button> Войти </Button>
                </Form>
            </AuthContainer>
            <div className={styles.background}>
                <Logo className={styles.logo} />
            </div>
        </div>
    )
}

export default Login
