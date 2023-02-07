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

                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/company'>Company</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/newproject'>NewProject</Link></li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar