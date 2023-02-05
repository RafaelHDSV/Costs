import React from 'react'
import stylesContainer from './Container.module.css'

function Container(props) {
    return (
        <div className={`${stylesContainer.container} ${stylesContainer[props.customClass]}`}>
            {props.children}
        </div>
    )
}

export default Container