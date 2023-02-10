import React from 'react'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './ProjectCard.module.css'

const ProjectCard = ({ id, name, budget, category, handleRemove }) => {
    return (
        <div className={styles.project_card}>
            <h4>{name}</h4>
            <p><span>Orçamento</span> R$ {budget}</p>
            <p className={styles.category_text}><span></span> {category}</p>

            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>
    )
}

export default ProjectCard