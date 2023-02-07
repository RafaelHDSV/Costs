import React from 'react'
import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../images/costs_logo.png'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link to='/'><img src={logo} alt='costs_logo.png' /></Link>

            <ul className={styles.list}>
                <li className={styles.item}><Link to='/'>Home</Link></li>
                <li className={styles.item}><Link to='/projects'>Projects</Link></li>
                <li className={styles.item}><Link to='/company'>Company</Link></li>
                <li className={styles.item}><Link to='/contact'>Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar