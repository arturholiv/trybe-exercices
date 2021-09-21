const sum = require('./sum');

describe('A funçao sum()', () => {
  it('recebe 4 e 5 e retorna 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  it('recebe 0 e 0 e retorna 0', () => {
    expect(sum(0, 0)).toBe(0)
  })
  it('dá erro quando recebe string', () => {
    expect(() => {
       sum(4, '5')
    }).toThrow();
  })
  it('mensagem de erro é parameters must be numbers quando sum(4, 5string,)', () => {
    expect(() => {
      sum(4, '5')
    }).toThrow(/parameters must be numbers/);
  })
})