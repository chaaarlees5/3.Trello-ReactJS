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
              <span className='textoCartao' contentEditable="true" suppressContentEditableWarning='true'>{itemC.card}</span>
            </div>
          ))}
  
          <span className='btnCartao' onClick={this.criaCartao}>
            + Adicionar um cartão
          </span>
        
        </div>
      )
    }
  }