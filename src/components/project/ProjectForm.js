import React from 'react'
import Input from '../form/Input'

import styles from './ProjectForm.module.css'

const ProjectForm = () => {
    return (
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do Projeto'></Input>
            <Input type='number' text='Orçamento do projeto' name='budget' placeholder='Insira o orçamento total'></Input>

            <select name="category_id">
                <option disabled selected>Selecione a categoria</option>
            </select>

            <input type="submit" value="Criar Projeto" />
        </form>
    )
}

export default ProjectForm