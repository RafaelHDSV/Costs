import React from 'react'
import loading from '../../images/loading.svg'

import styles from './Loading.module.css'

const Loading = () => {
    return (
        <div className={styles.loader_container}>
            <img className={styles.loader} src={loading} alt="loading.svg" />
        </div>
    )
}

export default Loading