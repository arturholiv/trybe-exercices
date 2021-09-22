const { encode, decode } = require('./functions')

describe('Funções encode e decode', () => {
  it('testa se encode é função', () => {
    expect(typeof encode).toBe('function')
  })
  it('testa se a = 1', () => {
    expect(encode('a')).toEqual('1')
  })
  it('testa se e = 2', () => {
    expect(encode('e')).toEqual('2')
  })
  it('testa se i = 3', () => {
    expect(encode('i')).toEqual('3')
  })
  it('testa se o = 4', () => {
    expect(encode('o')).toEqual('4')
  })
  it('testa se u = 5', () => {
    expect(encode('u')).toEqual('5')
  })
  it('testa se outras letras nao sao convertidas', () => {
    expect(encode('abcde')).toEqual('1bcd2')
  })
  it('verifica se o retorno da função tem o mesmo tamanho do input', () => {
    expect(encode('abcde').length).toEqual(5)
  })




  it('testa se decode é função', () => {
    expect(typeof decode).toBe('function')
  })
  it('testa se 1 = a', () => {
    expect(decode('1')).toEqual('a')
  })
  it('testa se 2 = e', () => {
    expect(decode('2')).toEqual('e')
  })
  it('testa se 3 = i', () => {
    expect(decode('3')).toEqual('i')
  })
  it('testa se 4 = o', () => {
    expect(decode('4')).toEqual('o')
  })
  it('testa se 5 = u', () => {
    expect(decode('5')).toEqual('u')
  })
  it('testa se outras letras nao sao convertidas', () => {
    expect(decode('1bcd2')).toEqual('abcde')
  })
  it('verifica se o retorno da função tem o mesmo tamanho do input', () => {
    expect(decode('1bcd2').length).toEqual(5)
  })

})