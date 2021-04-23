import React from 'react'
import styles from './textArea.module.scss'
import cn from 'classnames'

function TextArea(props) {
    const { placeholder, className } = props
    return (
        <div>
            <textarea
                className={styles.textarea}
                placeholder={placeholder}
                type="text"
            />
            <p className={styles.inputLength}> 233 / 500</p>
        </div>
    )
}

export default TextArea
