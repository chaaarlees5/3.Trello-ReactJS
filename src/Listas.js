import React, { Component } from 'react';
import AddCartao from './AddCartao';

export default class Listas extends Component {
    constructor(props) {
      super(props);
      this.state = {
        listas: []
      }
    }
  
  //Ao apertar botão, adiciona ao array 'lista' um elemento objeto com id, título e corpo.
    criaLista = () => {
      const {listas} = this.state
      listas.push({
        listas, 
          id: listas.length, 
          titulo: `Lista ${listas.length+1} - Clique para alterar`,
          botao: <AddCartao />
      })
      this.setState({ listas });
    }
    
    render() {
        const {listas} = this.state
        return (
            <div className='campoListas'>
                <div className='colunas'>
                    
                    {listas.map(itemL => (
                    <div key={itemL.id} className='lista'>
                        <h2 
                        className='tituloCartao' 
                        contentEditable="true" 
                        suppressContentEditableWarning='true'
                        >{itemL.titulo}
                        </h2>
                        
                        <div>{itemL.botao}</div>
                    </div>
                    ))}

                    <div className='espacoBtn'>
                    <div 
                    onClick={this.criaLista} 
                    className='btnNovaLista'
                    >
                        + Adicionar uma lista
                    </div>
                    </div>
                </div>
            </div>  
        )
    }
}