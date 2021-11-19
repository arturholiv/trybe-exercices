// As ACTIONS são intenções de mudança de estado.

// A STORE é onde o estado da sua aplicação fica registrado e protegido. As mudanças ou consultas feitas na store precisam estar definidas anteriormente numa action .

// Os REDUCER são responsáveis por manipular a store seguindo as regras definidas pelas actions

// Se o Redux fosse uma padaria, a store seria o forno de assar pão, o reducer seria a pessoa que faz o pão,
// as actions seriam as responsabilidades de quem faz o pão e o (a) cliente seria a aplicação ou o componente (no caso do React) que precisasse de um serviço.

const Redux = require('redux');


// essa é uma action
// Tem pelo menos uma propriedade type e é responsável por comunicar ao reducer uma mudança a ser feita na store
const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const INITIAL_STATE = {
  login: false,
  email: "",
};
  

// The reducer is simply a pure function that takes state and action, then returns new state. !!!!!!!!!!!!!!!!!!!
//  Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login,
          email: action.email,
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);

// SUBSCRIBE . Ele adiciona um listener que executará uma callback toda vez que uma action for despachada

  store.subscribe(() => {
    const state = store.getState();
    const wrapper = document.getElementById('wrapper');
    wrapper.className = state.login
  });


  // Função responsável por DESPACHAR uma action para o reducer, atualizando a store
  store.dispatch(fazerLogin("alguem@email.com"));  //  dispatch altera

  console.log(store.getState()); // getstate é para ler o obj
