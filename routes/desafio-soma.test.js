const soma = require('./desafio-soma');

test('Soma de 5 + 3 é igual a 8', () => {
  expect(soma(5, 3)).toBe(8);
})