import React from 'react'
import styles from './slider.module.scss'
import Facebook from '../../assets/facebook.png'
import cn from 'classnames'

function SliderButtons(props) {
    const { className } = props
    return (
        <div className={cn(styles.buttons, className)}>
            <button className={cn(styles.sliderButton)}>&#5176;</button>
            <button className={cn(styles.sliderButton)}>&#5171;</button>
        </div>
    )
}

export default SliderButtons
