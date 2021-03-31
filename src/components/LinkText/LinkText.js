import React from 'react';
import styles from './linkText.module.scss'
function LinkText(props) {
    const { text } = props;
    return (
        <a className={styles.link}>{text}</a>
    )
  }
  
  export default LinkText;