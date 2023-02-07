import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <ul>
                <li><FaFacebook></FaFacebook></li>
                <li><FaInstagram></FaInstagram></li>
                <li><FaLinkedin></FaLinkedin></li>
            </ul>
        </footer>
    )
}

export default Footer