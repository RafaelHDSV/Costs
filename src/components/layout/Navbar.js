import React from 'react'
import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../images/costs_logo.png'

const Navbar = () => {
    return (
        <nav>
            <Container>
                <Link to='/'><img src={logo} alt='costs_logo.png' /></Link>
                <Link to='/'>Home</Link>
                <Link to='/company'>Company</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/newproject'>NewProject</Link>
            </Container>
        </nav>
    )
}

export default Navbar