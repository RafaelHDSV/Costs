import React from 'react'
import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'
import Container from '../layout/Container'

import styles from './Projects.module.css'

const Projects = () => {

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    return (
        <div>
            <div>
                <h1>Meus projetos</h1>
                <a href="">novo projeto</a>
            </div>
            {message && <Message type='sucess' msg={message}></Message>}]
            <Container customClass='start'>
                <p>Projetos...</p>
            </Container>
        </div>
    )
}

export default Projects