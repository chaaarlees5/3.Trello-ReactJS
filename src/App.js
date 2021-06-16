import React, { Component } from 'react';
import './App.css';
import AddCartao from './AddCartao';
import rg from './components/rg.jpg';
//import Cabecalho from './Cabecalho'

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
      <div>
        <div className='barraCabeçalho'>
          <div className='espaçoLogo' >
            <img src='./components/rg.jpg' />
          </div>
        </div>

        <div className='barraQuadro'>
          <div className='contornoTitulo'>
            <h1 className='tituloQuadro' contentEditable="true" suppressContentEditableWarning='true'>Digite o nome do quadro</h1>
          </div>
        </div>

        <div className='colunas'>
          
          {listas.map(itemL => (
            <div key={itemL.id} className='lista'>
              <h3 className='tituloCartao' contentEditable="true" suppressContentEditableWarning='true'>{itemL.titulo}</h3>
              <div>{itemL.botao}</div>
            </div>
          ))}

        </div>

        <button onClick={this.criaLista} className='btnNovaLista'>
            Criar Lista
          </button>

      </div>
    )
  }
}

export default (App);