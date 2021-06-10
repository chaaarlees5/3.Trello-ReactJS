import React, { Component } from 'react';
import ReactDOM from "react-dom";

class CountDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contagem_fixa: 1,
    };
  }

  render() {
    return (
      <div>
      <p>
        Contagem fixa { this.state.contagem_fixa }
      </p>
      <p>
        Contagem variavel { this.props.contagem };
      </p>
        
        
      </div>
    )
    }
}

/*
const CountDisplay = (props) => {
  console.log(props);
  return (
      <div>
        The count is { props.contagem };
      </div>
  )
};
*/
export default CountDisplay;