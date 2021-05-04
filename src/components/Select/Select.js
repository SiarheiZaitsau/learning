import React, { useState, useEffect } from 'react'
import styles from './select.module.scss'
import cn from 'classnames'
import { ReactComponent as Submit } from '../../assets/check-mark-svgrepo-com.svg'
import { ReactComponent as Down } from '../../assets/downIcon.svg'

function Select(props) {
    const { className, options } = props
    const [currentValue, setCurrentValue] = useState(options[0])
    const [menuActive, setMenuActive] = useState(false)
    console.log(currentValue)
    // useEffect(() => {
    //     setCurrentOptions(options.filter((value) => value !== currentValue))
    // }, [currentValue, options])
    const showOptions = (e) => {
        e.preventDefault()
        // menuActive
        //     ? (document.getElementsByClassName(
        //           `${styles.optionsContainer}`
        //       )[0].style.display = 'none')
        //     : (document.getElementsByClassName(
        //           `${styles.optionsContainer}`
        //       )[0].style.display = 'flex')
        setMenuActive((prevstate) => !prevstate)
    }
    const optionClick = (e) => {
        e.preventDefault()
        // document.getElementsByClassName(
        //     `${styles.optionsContainer}`
        // )[0].style.display = 'none'
        setMenuActive((prevstate) => !prevstate)
        setCurrentValue(e.target.value)
    }
    return (
        <div className={styles.container}>
            <button
                className={styles.button}
                value={currentValue}
                onClick={(e) => showOptions(e)}
            >
                {currentValue}
                <Down
                    className={cn(styles.downIcon, {
                        [styles.rotate]: menuActive,
                    })}
                />
            </button>
            <div
                className={cn(styles.optionsContainer, {
                    [styles.active]: menuActive,
                })}
            >
                {options.map((item, index) => {
                    console.log(item)
                    return item === currentValue.toString() ? (
                        <button
                            className={styles.option}
                            onClick={(e) => optionClick(e)}
                            value={item}
                            key={index}
                        >
                            {item}
                            <Submit className={styles.icon} />
                        </button>
                    ) : (
                        <button
                            className={styles.option}
                            onClick={(e) => optionClick(e)}
                            value={item}
                            key={index}
                        >
                            {item}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export default Select
