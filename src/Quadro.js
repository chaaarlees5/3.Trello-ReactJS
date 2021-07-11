import React, { Component } from 'react';

export default class Quadro extends Component {
    render () {
        return (
            <div className='barraQuadro'>
                <div className='contornoTitulo'>
                    <h2 
                        className='tituloQuadro' 
                        contentEditable="true" 
                        suppressContentEditableWarning='true'
                    >
                    Tecnologia e Ciência
                    </h2>
                </div>
            </div>
        )
    }
}