import React from 'react'
import Input from '../form/Input'
import Select from '../form/Select'

import styles from './ProjectForm.module.css'

const ProjectForm = () => {
    return (
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do Projeto'></Input>
            <Input type='number' text='Orçamento do projeto' name='budget' placeholder='Insira o orçamento total'></Input>

            <Select name='category_id' text='Selecione a categoria'></Select>

            <input type="submit" value="Criar Projeto" />
        </form>
    )
}

export default ProjectForm