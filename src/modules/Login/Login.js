import React from 'react';
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import styles from './login.module.scss'
import LinkText from '../../components/LinkText/LinkText';
import Button from '../../components/Button/Button';

function Login() {

    return (
        <AuthContainer>
            <div className={styles.container}>
                <h2 className={styles.title}> Авторизация </h2>
                <p className={styles.text}>Если у вас ещё нет аккаунта, мы можете <LinkText text="оставить заявку на регистрацию."/></p>
                <form className={styles.form}>
                    <input className={styles.input}  type="text" placeholder="E-mail"/>
                    <input className={styles.input} type="text" placeholder="Пароль"/>
                    <p className={styles.formText}> <LinkText text="Забыли пароль?"/> </p> 
                    <Button text="Войти"/> 
                </form>
                </div>
        </AuthContainer>
    )
  }
  
  export default Login;