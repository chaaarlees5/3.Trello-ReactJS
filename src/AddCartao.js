import React, { Component } from 'react';

export default class AddCartao extends Component {
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
  
          <button className='btnCartao' onClick={this.criaCartao}>
            Adicionar Cartão
          </button>
        
        </div>
      )
    }
  }