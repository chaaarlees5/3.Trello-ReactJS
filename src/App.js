import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listas: [
      ]
    }
  }
//Ao apertar botão, adiciona ao array 'lista' um elemento objeto com id, título e corpo.
  criaLista = () => {
    const {listas} = this.state
    listas.push({
      listas, id: listas.length, 
      titulo: `Lista ${listas.length+1} - Clique para alterar`, 
      corpo: 'Digite o texto aqui',
    })
    this.setState({ listas });
  }

  criaCartao = () => {
    const {listas} = this.state
  
  }

  render() {
    const {listas} = this.state
    return (
      <div className='colunas'>
        {listas.map(item => (
          <div key={item.id} className='caixa'>
            <h3 contentEditable="true" suppressContentEditableWarning='true'>{item.titulo}</h3>
            <span contentEditable="true" suppressContentEditableWarning='true'>{item.corpo}</span>
            <br></br>
            <button id={item.id} className='btnNovaLista' onClick={this.criaCartao}>Adicionar Cartão</button>
          </div>
        ))}
          
        <button onClick={this.criaLista} className='btnNovaLista'>
          Criar Lista
        </button>

      </div>
    )
  }
}

export default (App);