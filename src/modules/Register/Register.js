import React from 'react';
import AuthContainer from "../../components/AuthContainer/AuthContainer";
import styles from "./register.module.scss";
import LinkText from '../../components/LinkText/LinkText';
import Button from '../../components/Button/Button';
import StepNumber from '../../components/StepNumber/StepNumber'
import { ReactComponent as Forward } from '../../assets/forward.svg';
function Register() {
    return (
        <AuthContainer>
            <div className={styles.iconContainer}>
                <Forward className={styles.forward} />
                <p className={styles.navText}> НАЗАД</p>
            </div>
            <h2 className={styles.title}> Регистрация </h2>
            <p className={styles.text}>Для продолжения введите свой <LinkText text="персональный пин-код."/></p>
            <form className={styles.form}>
                <input className={styles.input}  type="text" placeholder="Введите пин-код"/>
                <div className={styles.nextStepContainer}>
                    <Button text="Продолжить"/> 
                    <StepNumber number={1}/>
                </div>
            </form>
        </AuthContainer>
    )
  }
  
  export default Register;