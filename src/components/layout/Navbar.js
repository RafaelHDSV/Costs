import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Navbar.module.css'
import logo from '../../images/costs_logo.png'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/'><img src={logo} alt='costs_logo.png' /></Link>

            <ul className={styles.list}>
                <li className={styles.item}><Link to='/'>Home</Link></li>
                <li className={styles.item}><Link to='/projects'>Projetos</Link></li>
                <li className={styles.item}><Link to='/company'>Empresa</Link></li>
                <li className={styles.item}><Link to='/contact'>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar