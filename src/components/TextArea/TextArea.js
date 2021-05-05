import React, { useState } from 'react'
import styles from './textArea.module.scss'

function TextArea(props) {
    const { value: propsValue, maxLength = 500, ...otherAProps } = props
    const [value, setValue] = useState(propsValue)

    const onChange = (e) => {
        if (e.target.value.length <= maxLength) {
            setValue(e.target.value)
        } else {
            setValue(e.target.value.slice(0, maxLength))
        }
    }

    return (
        <div>
            <textarea
                className={styles.textarea}
                value={value}
                type="text"
                maxLength
                onChange={onChange}
                {...otherAProps}
            />
            <p
                className={styles.inputLength}
            >{` ${value.length} / ${maxLength}`}</p>
        </div>
    )
}

export default TextArea
