import React from 'react'
import { useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'

const ProjectForm = ({ btnText }) => {

    const [categories, setCategories] = useState([])

    fetch('http://localhost:5000/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))

    return (
        <form className={styles.form}>
            <Input type='text' text='Nome do Projeto' name='name' placeholder='Insira o nome do Projeto'></Input>
            <Input type='number' text='Orçamento do projeto' name='budget' placeholder='Insira o orçamento total'></Input>

            <Select name='category_id' text='Selecione a categoria' options={categories}></Select>

            <SubmitButton text={btnText}></SubmitButton>
        </form>
    )
}

export default ProjectForm