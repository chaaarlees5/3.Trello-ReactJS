import React, { Component } from 'react';
import './App.css';

class AddCartao extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartoes: []
    }
  }

  criaCartao = () => {
    const {cartoes} = this.state
    cartoes.push({
      id: cartoes.length,
      card: 'Clique para alterar.',
    })
    this.setState({ cartoes });
  }

  render(){
    const {cartoes} = this.state
  
    return (
      <div>

        {cartoes.map(itemC => (
          <div key={itemC.id} className='cartao'>
            <span contentEditable="true" suppressContentEditableWarning='true'>{itemC.card}</span>
          </div>
        ))}

        <button onClick={this.criaCartao}>
          Adicionar Cartão
        </button>
      
      </div>
    )
  }
}

class App extends Component {
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
      <div className='colunas'>
        
        {listas.map(itemL => (
          <div key={itemL.id} className='lista'>
            <h3 contentEditable="true" suppressContentEditableWarning='true'>{itemL.titulo}</h3>
            <div>{itemL.botao}</div>
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