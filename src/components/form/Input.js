import React from 'react'
import styles from './Input.module.css'

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
    return (
        <div className={styles.form_control}>
            <label htmlFor=""></label>
            <input type="text" />
        </div>
    )
}

export default Input