import React from 'react'
import styles from './Message.module.css'

const Message = ({ type, msg }) => {
    return (
        <div className={`${styles.message} ${styles[type]}`}>
            {msg}
        </div>
    )
}

export default Message