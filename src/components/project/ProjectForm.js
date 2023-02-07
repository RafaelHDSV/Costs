import React from 'react'
import styles from './ProjectForm.module.css'

const ProjectForm = () => {
    return (
        <form className={styles.form}>
            <input type="text" placeholder='Insira o nome do projeto' />
            <input type="number" placeholder='Insira o orçamento total' />

            <select name="category_id">
                <option disabled selected>Selecione a categoria</option>
            </select>

            <input type="submit" value="Criar Projeto" />
        </form>
    )
}

export default ProjectForm