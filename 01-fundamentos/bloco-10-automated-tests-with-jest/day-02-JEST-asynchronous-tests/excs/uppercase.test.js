const uppercase = require('./uppercase');

  test(' deve retornar TRYBE quando o parametro trybe é passado',  (done) => {
    uppercase('trybe', (str) => {
     try {
       expect(str).toBe('TRYBE');
       done();
     } catch (err) {
       done(err);
     }
    })
  })
