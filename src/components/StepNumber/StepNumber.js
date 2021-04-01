import React from 'react'
import styles from './stepNumber.module.scss'
function StepNumber(props) {
    const { number } = props
    return <p className={styles.stepNumber}> {number} шаг из 3</p>
}

export default StepNumber
