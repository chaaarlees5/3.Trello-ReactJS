import React, { Component } from 'react';
import logo from './components/logo.gif';

export default class Cabecalho extends Component {
    render () {
        return (
            <div className='barraCabeçalho'>
                <div className='espaçoLogo' >
                    <img src={logo} alt="BigCo Inc. logo" className='logo'/>
                </div>
            </div>
        )            
    }
}