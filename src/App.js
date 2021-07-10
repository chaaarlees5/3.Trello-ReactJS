import React, { Component } from 'react';
import './App.css';
import AddCartao from './AddCartao';
import logo from './components/logo.gif';
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
            <img src={logo} alt="BigCo Inc. logo" className='logo'/>
          </div>
        </div>

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
      </div>
    )
  }
}

export default (App);

/*  
<div className='lista'>
              
            </div>

            <input type='text' placeholder='Insira o título da lista' dir='auto' />
              <button onClick={this.criaLista} className='btnNovaLista'>
                  Adicionar Lista
              </button>
*/
