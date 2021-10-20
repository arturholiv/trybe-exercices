import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
  constructor() {
    super();
    
    this.state = {
      estadoFavorito: '',
      nome: '',
      idade: '',
      vaiComparecer: false,
    };
    
        this.handleChange = this.handleChange.bind(this);
  }


  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { estadoFavorito, nome, idade, vaiComparecer } = this.state;

    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
          <label>
            Diga qual o seu Estado favorito! De React ou do Brasil, você decide! 
              <input
              name="estadoFavorito" 
              value={ estadoFavorito }
              onChange={ this.handleChange }
              />
          </label>
             
         <fieldset>
           <legend> Informações Pessoais </legend>
          <label >
            Nome:
          <input
              type="text"
              name="name"
              value={ nome }
              onChange={ this.handleChange }
            />  
          </label>   

          <label htmlFor="idade">
              Idade:
              <select
                id="idade"
                name="idade"
                defaultValue=""
                onChange={ this.handleChange }
                value={ idade }
              >
                <option value="">Selecione</option>
                <option value="adult"> +18</option>
                <option value="underage"> -18</option>
              </select>
            </label>
            </fieldset>
          <label htmlFor="vaiComparecer">
            Vai comparecer
            <input
              type="checkbox"
              name="vaiComparecer"
              onChange={this.handleChange}
              value={ vaiComparecer }
            />
          </label>

          <label for="file">
            <input type="file" />
          </label>

        </form>
      </div>
    );
  }
}

export default Form;