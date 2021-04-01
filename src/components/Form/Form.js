import React from 'react'
import styles from './form.module.scss'

function Form(props) {
    return <form className={styles.form}>{props.children}</form>
}

export default Form
