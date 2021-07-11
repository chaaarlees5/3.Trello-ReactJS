import React, { Component } from 'react';
import './App.css';
import Cabecalho from './Cabecalho';
import Quadro from './Quadro';
import Listas from './Listas';

class App extends Component {
  render() {
    return (
      <div>
        <Cabecalho />

        <Quadro />

        <Listas />        
      </div>
    )
  }
}

export default (App);
