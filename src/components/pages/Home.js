import React from 'react'
import LinkButton from '../layout/LinkButton'

import savings from '../../images/savings.svg'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Começe a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to='/newproject' text='Criar Projeto'></LinkButton >
            <img src={savings} alt="savings.svg'" />
        </section>
    )
}

export default Home