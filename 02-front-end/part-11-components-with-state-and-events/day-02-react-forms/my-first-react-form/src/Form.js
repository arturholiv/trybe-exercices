import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      vaiComparecer: false,
    };
  }


  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! 
              <textarea
              name="estadoFavorito" 

              />
          </label>
             
          <label >
            Nome:
          <input
              type="text"
              name="name"
            />  
          </label>   

          <label htmlFor="age">
              Idade:
              <select
                id="age"
                name="age"
                defaultValue=""
              >
                <option value="">Selecione</option>
                <option value="adult"> +18</option>
                <option value="underage"> -18</option>
              </select>
            </label>

          <label>
            Vai comparecer
            <input
              type="checkbox"
              name="vaiComparecer"
              onChange={this.handleChange}
              value={this.state.vaiComparecer}
            />
          </label>

    
        </form>
      </div>
    );
  }
}

export default Form;