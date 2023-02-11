import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Message from '../layout/Message'
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

const Projects = () => {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            haders: {
                'Content-type': 'application/json'
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setProjects(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto'></LinkButton >
            </div>

            {message && <Message type='sucess' msg={message}></Message>}

            <Container customClass='start'>
                {projects.length > 0 && (
                    projects.map((project) => (
                        <ProjectCard id={project.id} name={project.name} budget={project.budget} category={project.category.name} key={project.id}></ProjectCard>
                    ))
                )}
            </Container>
        </div>
    )
}

export default Projects