import React from 'react'

const ProjectForm = () => {
    return (
        <form>
            <input type="text" placeholder='Insira o nome do projeto' />
            <input type="number" placeholder='Insira o orçamento total' />

            <select name="category_id">
                <option disabled>Selecione a categoria</option>
            </select>

            <input type="submit" value="Criar Projeto" />
        </form>
    )
}

export default ProjectForm