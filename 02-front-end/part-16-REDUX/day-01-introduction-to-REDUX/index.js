const Redux = require('redux');

const fazerLogin = (email) => ({
  type: "LOGIN",
  email});

const INITIAL_STATE = {
  login: false,
  email: "",
  };
  
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

  store.subscribe(() => {
    const state = store.getState();
    const wrapper = document.getElementById('wrapper');
    wrapper.className = state.login
  });

  store.dispatch(fazerLogin("alguem@email.com"));

  console.log(store.getState());