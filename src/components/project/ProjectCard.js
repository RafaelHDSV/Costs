import React from 'react'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './ProjectCard.module.css'

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
    return (
        <p>{name}</p>
    )
}

export default ProjectCard