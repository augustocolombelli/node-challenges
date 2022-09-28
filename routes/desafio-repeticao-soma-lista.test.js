const somaValores = require('./desafio-repeticao-soma-lista');

test('A soma dos números deve ser igual a 15', () => {
  var numerosParaSomar = [2, 3, 5, 5];
  
  expect(somaValores(numerosParaSomar)).toBe(15);
})