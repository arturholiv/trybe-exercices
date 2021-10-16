import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }
  }

    handleClick() {
      this.setState((estadoAnterior, _props) => ({
        numeroDeCliques: estadoAnterior.numeroDeCliques + 1
      }))
      console.log(this.state.numeroDeCliques + 1)
  }

  render() {
    return <button key={this.state.numeroDeCliques} onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}

export default App;
